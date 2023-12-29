import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import AppNavigation from './app/navigator/AppNavigation';
import { StatusBar } from 'react-native';
import Colors from './app/resources/styles/Colors';


const App = () => {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
        <AppNavigation />
      </NavigationContainer>
      
  )
}

export default App;