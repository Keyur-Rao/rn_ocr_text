import { Button, StyleSheet, Text, View, Animated, PanResponder } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({ navigation }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: ()=> true,
    onMoveShouldSetPanResponder: ()=> true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      pan.extractOffset();
    },
  })
  return (
    <SafeAreaView>
      <View>

      <Text>Home</Text>
      <Button color={'purple'} title='go to splash' onPress={()=> navigation.navigate('SplashScreen')}/>
      </View>

      <Animated.View 
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}
      >
        <View style={{ 
          width: 200, 
          height: 200, 
          backgroundColor: 'blue', 
          margin: 20
        }} ></View>
      </Animated.View>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({})