import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Camera, useCameraDevice, useCameraFormat} from 'react-native-vision-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../resources/styles/Colors';
import { moderateScale } from '../helpers/Responsive';
import { Badge } from 'react-native-paper';

function CaptureCamera({ navigation }) {
  const camera = useRef(null);
  const device = useCameraDevice('front', {
    physicalDevices: ['ultra-wide-angle-camera', 'wide-angle-camera', 'telephoto-camera']
  });
  
  const format = useCameraFormat(device, [
    { photoHdr: true },
  ])

  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState([]);

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({
        flash: 'on', // 'auto' | 'off'
        enableShutterSound: true, // default true

      });
      setImageSource([...imageSource, photo.path]);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
        <>
          <SafeAreaView style={StyleSheet.absoluteFill}>
            <Camera
              ref={camera}
              device={device}
              isActive={true}
              photo={true}
              style={StyleSheet.absoluteFill}
              enableHighQualityPhotos={true}
              photoHdr={format.supportsPhotoHdr}
            />
          </SafeAreaView>

          <View style={styles.buttonContainer}>

            <View style={styles.button}>
              <TouchableOpacity
                style={[styles.gallery]}
                onPress={() => capturePhoto()}
              > 
                <MaterialCommunityIcons name='image' size={20} color={Colors.white} />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 2 }}>
              <TouchableOpacity
                style={[styles.camButton]}
                onPress={() => capturePhoto()}
              >
                <View style={styles.innerCam}></View>
              </TouchableOpacity>
            </View>
            
              <View style={[styles.button]}>
              {
                imageSource && imageSource.length > 0 && (
                  <View style={{ position: 'relative', width: '70%'}}>
                    <Image style={styles.imagePreview} source={{ uri: `file://${imageSource[imageSource.length - 1]}`}} />
                    <Badge style={styles.badge}> {imageSource.length} </Badge> 
                  </View>
                )
              }
              </View>

          </View>
        </>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.neutral10,
    position: 'absolute',
    // justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  button: {
    flex: 1,
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: Colors.white,
  },
  innerCam: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: Colors.black,
  },
  gallery: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagePreview: {
    // marginLeft: 30,
    width: '100%', 
    height: moderateScale(80),  
    borderRadius: 10,
  },
  badge: {
    position: 'absolute',
    top: 8,
    zIndex: 1,
    right: 5
  }
});

export default CaptureCamera;