import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './app/navigator/MyTabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import AppNavigation from './app/navigator/AppNavigation';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
      
  )
}

export default App;