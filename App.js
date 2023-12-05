import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './app/navigator/MyTab';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

export default App;

