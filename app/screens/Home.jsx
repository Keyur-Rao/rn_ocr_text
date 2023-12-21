import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Fonts from '../resources/styles/Fonts'

const Home = ({ navigation }) => {

  return (
    <SafeAreaView>
      <Text style={{ fontFamily: Fonts.Bold }}> Home page </Text>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({})