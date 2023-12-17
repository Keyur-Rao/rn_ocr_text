import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './app/navigator/MyTabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
      
  )
}

export default App;