import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { moderateScale } from '../helpers/Responsive'
import Colors from '../resources/styles/Colors'
import DateWiseImages from '../components/DateWiseImages'

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DateWiseImages />
        <DateWiseImages />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
    backgroundColor: Colors.white,
  }
})