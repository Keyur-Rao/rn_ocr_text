import { StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid, Dimensions, Image, ScrollView, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import RNTextDetector from "rn-text-detector";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const App = () => {
  const [imageSource, setImageSource] = useState([]);
  const [images, setImages] = useState([]);
  const [ocrText, setOcrText] = useState("");
  const [book, setBook] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(null);

  // useEffect(()=>{
  //   console.log(`Uris ${images} and base64 ${imageSource.length}`);
  //   console.log("book arr ", book);
    
  // }, [images, imageSource]);

  const options = {
    title: 'Select Photo',
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'Choose from Library',
    mediaType: 'mixed',
    quality: 0.7,
    saveToPhotos: true,
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    includeBase64: true, //add this in the option to include base64 value in the response
    selectionLimit: 5,
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        return true;
      } else {
        console.log('Camera permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestWritePermission = async () => {
    // if (Platform.OS === 'android' && Platform.Version >= 33) {
    //   return true;
    // }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Storage Permission',
          message: 'App needs access to your storage ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log("Permission ", granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED || granted === 'never_ask_again' || granted === 'denied') {
        console.log('Storage permission given');
        return true;
      } else {
        console.log('storage permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const detectImage = async response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      console.log("Response ", response.assets.length);
      // console.log('Source of image ', JSON.stringify(response));
      // console.log('Source of image ', response.assets[0].base64);
      // console.log('Source of image ', response.assets[0].fileSize);
      // console.log('Source of image ', response.assets[0].fileName);
      // console.log('Source of image ', response.assets[0].uri);
      // console.log('Source of image ', response.assets[0].height);
      // console.log('Source of image ', response.assets[0].width);

      if (response.assets && response.assets.length) {
        if (response.assets.length === 1) {
          console.log("sinle document recogniz");
          response.assets[0].base64 && setImageSource([...imageSource, `${response.assets[0].base64}`]);
          response.assets[0].uri && setImages([...images, response.assets[0].uri]);
          console.log(response.assets[0].uri);

        } else {
          console.log("multiple documents recogniz");
          response.assets.forEach(element => {
            setImageSource([...imageSource, `${element.base64}`]);
            setImages([...images, element.uri]);
            console.log(element.uri);
          });
        }
      }

    }
  }

  const getPhoto = async (type) => {
    let storagePermission = await requestWritePermission();
    let cameraPermission = await requestCameraPermission();
    // let readPermission = await requestReadPermission();
    console.log('Camera permission ', cameraPermission);
    console.log('Write Storage permission ', storagePermission);
    // console.log('Read Storage permission ', readPermission);
    if (cameraPermission && storagePermission) {
      try { 
        console.log('launching camera');
        type === 'capture' ? launchCamera(options, detectImage) : launchImageLibrary(options, detectImage);
      } catch (error) {
        console.log('Error', error);
      }
    }
  }

  const getText = async () => {
    let bookObj = []
    for (let index = 0; index < images.length; index++) {
      const element = images[index];
      const recognitizedText = await RNTextDetector.detectFromUri(element);
      console.log(recognitizedText[0].text);
      bookObj.push({page: index+1, context: recognitizedText[0].text})
    }
  

    setTimeout(() => {
      console.log(bookObj);
      setBook(bookObj);
    }, 3000);
  }

  const searchTextInImage = () => {
    console.log(searchText);
    let index = book.findIndex((element, index) => {
      return element.context.includes(searchText)
    });
    console.log("page number ", index);
    setPageNumber(++index);
  }

  return (
    <View>
    <ScrollView>
      <Text style={{fontSize: 30, textAlign: 'center'}}>ocr Scanner </Text>

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={()=> { getPhoto('capture') }}> 
          <Text style={styles.btnText}> Open camera </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> { getPhoto('library') }}> 
          <Text style={styles.btnText}> From library </Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.inputText} onChangeText={(text)=> setSearchText(text)} placeholder='Search text here...'/>
      <TouchableOpacity style={[styles.button, { width: 95, alignSelf: 'flex-end'}]} onPress={searchTextInImage}>
            <Text style={[styles.btnText]}> Search </Text>
      </TouchableOpacity>
      { pageNumber && <Text style={styles.ocrTextContainer}> {searchText} found at {pageNumber} page</Text> }

      <View style={styles.imgContainer}>
            {imageSource.map((image, index) => {
              return (
                <Image key={index} source={{uri: `data:image/jpg;base64,${image}`}} style={styles.image} />
              );
            })}
       </View>

      <TouchableOpacity style={styles.button} onPress={getText}>
            <Text style={styles.btnText}> Recognise text </Text>
      </TouchableOpacity>

      <View style={styles.ocrTextContainer}>
          {
            book.map((page, index) => {
              return (
                <View style={styles.singlePage} key={index}>
                  <Text style={styles.pageNo}> Page : {page.page}</Text>
                  <Text style={styles.text}> Text : {page.context} </Text>
                </View>
              )
            })
          }
      </View>
    </ScrollView>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
button: {
  backgroundColor: '#7EAA92',
  margin: 10,
  padding: 10,
  borderRadius: 15,
},
btnText: {
  fontSize: 18,
  color: 'white',
  fontVariant: 'small-cap'
},
imgContainer: {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
},
image: {
  width: screenWidth / 2 - 30,
  height: 180,
  margin: 10,
  borderRadius: 30,
},
ocrTextContainer: {
  fontSize: 22,
  height: 'auto'
},
singlePage: {
  padding: 10,
  margin: 10,
  elevation: 1,
  backgroundColor: 'tomato',
  borderRadius: 10,
},
pageNo: {
  fontSize: 22,
  color: 'black',
  fontWeight: '700'
},
text: {
  fontSize: 18,
  color: 'black',
  fontStyle: 'italic'
},
inputText: {
  borderWidth: 1,
  borderColor: '#7EAA92',
  borderStyle: 'solid',
  marginHorizontal: 10,
  paddingHorizontal: 10,
  borderRadius: 20,
  color: '#7EAA92',
}
});