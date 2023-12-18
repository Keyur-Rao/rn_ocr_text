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