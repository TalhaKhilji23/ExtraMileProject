import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cart from '../Screens/Cart';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import WishListStack from './WishListStack';
import {colors} from '../global/globalStyles';

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
          name="Home"
          component={Home}
          listeners={{
            tabPress: e => {
              setRoute('Settings');
            },
          }}
          options={{
            activeTintColor: colors.black1,
            headerShown: false,

            tabBarIcon: ({color, size}) => (
              <MaterialIcons
                name="home"
                style={{color: colors.black1}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="WishListStack"
          component={WishListStack}
          options={{
            title: 'Wishlist',
            activeTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" style={{color: 'red'}} size={25} />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'CartStack',
            activeTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialIcons
                name="local-mall"
                style={{color: colors.black1}}
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
                style={{color: colors.black1}}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
