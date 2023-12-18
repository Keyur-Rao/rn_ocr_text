import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Button } from 'react-native-paper';

const Add = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ position: 'relative'}}>

  

    <Animated.View style={{width: 100, height:100, backgroundColor: 'red', margin: 20,  transform: [{ scale: scaleValue}]}} >
      <Text>Add</Text>
    </Animated.View>
  

    <Button onPress={()=> {
      console.warn('called')
      Animated.timing(scaleValue, {
        toValue: scaleValue == 0 ? 4 : 1,
        duration: 1000,
        useNativeDriver: true
      }).start()
      console.log('scal value ', scaleValue)
    }} style={{backgroundColor: 'black', position: 'absolute', bottom: 0}}> Scale </Button>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({});