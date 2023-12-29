import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import SplashScreen from '../screens/SplashScreen';
import CaptureCamera from '../screens/CaptureCamera';

const Stack = createStackNavigator();

const AppNavigation = ()=> {
    return (
        <Stack.Navigator initialRouteName='MyTabs' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MyTabs'>
                { ()=> <MyTabs /> } 
            </Stack.Screen>
            <Stack.Screen name='CaptureCamera' component={CaptureCamera} />
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigation;