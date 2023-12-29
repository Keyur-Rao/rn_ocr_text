import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Settings from '../screens/Settings';
import Colors from '../resources/styles/Colors';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      id='#TabNav'
      initialRouteName="Home" // By default render this screen first
      activeColor={Colors.primary} // active tabBar font color
      inactiveColor={Colors.secondary} // Inactive tabBars font color
      barStyle={{ backgroundColor: 'white' }} // TabBar style
      // sceneAnimationEnabled={true} // Show screen animated view
      // sceneAnimationType='shifting'
      style={{ display: 'flex'}}
      theme={{ colors: { secondaryContainer: Colors.primary, elevation: 2 } }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: 'orange',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home" color={ focused ? 'white' : Colors.secondary} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarColor: 'blue',
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="add" color={ focused ? 'white' : Colors.secondary} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarColor: 'red',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <SimpleLineIcons name="settings" color={ focused ? 'white' : Colors.secondary} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs;
