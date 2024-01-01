import React , { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function Add({ navigation }) {
  useEffect(() => {
    console.log('REdirect to camera SCREEN');
    
    const clearTimeOut = setTimeout(() => {
      console.warn("settime out ")
      navigation.navigate("CaptureCamera");
    }, 100);

    return ()=> {
      clearTimeout(clearTimeOut);
    }

  }, []);



  return (
    <View style={styles.container}>
      <Text> Camera screeen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Add;