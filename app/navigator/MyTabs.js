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
      initialRouteName="Home"
      activeColor={Colors.primary}
      inactiveColor={Colors.secondary}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: 'orange',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home" color={ focused ? 'white' : Colors.secondary} size={26} />
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
            <MaterialIcons name="add" color={ focused ? 'white' : Colors.secondary} size={26} />
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
            <SimpleLineIcons name="settings" color={ focused ? 'white' : Colors.secondary} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs;
