import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <Button textColor='white' buttonColor='black' elevation={12} rippleColor={'white'} onPress={()=> navigation.popToTop()}> Go Back</Button>

    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({});


// import React, {useEffect, useState, useRef} from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   Linking,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import {Camera, useCameraDevice} from 'react-native-vision-camera';
// import Colors from '../resources/styles/Colors';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// function CaptureCamera({ navigation }) {
//   const camera = useRef(null);
//   const device = useCameraDevice('back');
  
//   // const device = devices.back;

//   const [showCamera, setShowCamera] = useState(false);
//   const [imageSource, setImageSource] = useState('');

//   useEffect(() => {
//     async function getPermission() {
//       const permission = await Camera.requestCameraPermission();
//       console.log(`Camera permission status: ${permission}`);
//       if (permission === 'denied') await Linking.openSettings();
//     }
//     getPermission();
//   }, []);

//   const capturePhoto = async () => {
//     if (camera.current !== null) {
//       const photo = await camera.current.takePhoto({});
//       setImageSource(photo.path);
//       setShowCamera(false);
//       console.log(photo.path);
//     }
//   };

//   if (device == null) {
//     return <Text>Camera not available</Text>;
//   }

//   return (
//     <View style={styles.container}>

//           <SafeAreaView style={StyleSheet.absoluteFill}>
//             <Camera
//               ref={camera}
//               device={device}
//               isActive={showCamera}
//               photo={true}
//               style={StyleSheet.absoluteFill}
//             />
//           </SafeAreaView>

//           <View style={styles.buttonContainer}>
            
//             <TouchableOpacity
//               style={styles.gallery}
//               onPress={() => capturePhoto()}
//             >
//               <MaterialCommunityIcons name='image' size={20} color={Colors.white} />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.camButton}
//               onPress={() => capturePhoto()}
//             />

//             <TouchableOpacity
//               style={styles.camButton}
//               onPress={() => capturePhoto()}
//             />
//           </View>
        

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
//   buttonContainer: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     position: 'absolute',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     width: '100%',
//     bottom: 0,
//     padding: 20,
//   },
//   camButton: {
//     height: 80,
//     width: 80,
//     borderRadius: 40,
//     //ADD backgroundColor COLOR GREY
//     backgroundColor: Colors.white,

//     alignSelf: 'center',
//     borderWidth: 4,
//     borderColor: Colors.neutral60,
//   },
//   gallery: {
//     width: 50,
//     height: 50,
//     borderWidth: 2,
//     borderColor: Colors.white,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
//   // image: {
//   //   width: '100%',
//   //   height: '100%',
//   //   aspectRatio: 9 / 16,
//   // },
// });

// export default CaptureCamera;