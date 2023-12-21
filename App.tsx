import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import AppNavigation from './app/navigator/AppNavigation';


const App = () => {
  return (
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      
  )
}

export default App;