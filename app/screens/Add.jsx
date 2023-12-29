import React , { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function Add({ navigation }) {
  useEffect(() => {
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