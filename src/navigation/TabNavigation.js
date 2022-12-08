import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cart from '../Screens/Cart';
import Wishlist from '../Screens/Wishlist';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
const SettingsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const [route, setRoute] = useState('home');
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
            width: '100%',
            height: '5%',
            marginBottom: 3,
          },
        }}>
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            activeTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcons
                name="settings"
                style={{color: 'white'}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          listeners={{
            tabPress: e => {
              setRoute('Settings');
            },
          }}
          options={{
            activeTintColor: 'red',
            headerShown: false,

            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" style={{color: 'white'}} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            activeTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcons
                name="account-circle"
                style={{color: 'white'}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            activeTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcons
                name="account-circle"
                style={{color: 'white'}}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
