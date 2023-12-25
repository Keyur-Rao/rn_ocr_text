import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fonts from '../resources/styles/Fonts'
import TextSize from '../resources/styles/TextUnits'

const Header = () => {
  return (
    <View>
      <Text style={styles.headerText}> OCR Scan </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerText: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: Fonts.SemiBold,
        fontSize: TextSize.xmedium,
        fontWeight: "600",
    }
})