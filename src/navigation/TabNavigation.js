import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Cart from '../Screens/Cart';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import WishListStack from './WishListStack';
import Categories from '../Screens/Categories';
import HomeStack from './HomeStack';
import {colors} from '../global/globalStyles';
import UpdateProfile from '../Screens/UpdateProfile';
import UserProfile from '../Screens/UserProfile';
import ProfileStack from './ProfileStack';
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
          name="HomeStack"
          component={HomeStack}
          listeners={{
            tabPress: e => {
              setRoute('Settings');
            },
          }}
          options={{
            tabBarLabel: 'Home',

            activeTintColor: colors.black1,
            headerShown: false,

            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="home"
                color={focused ? '#7cc' : colors.black1}
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
            activeTintColor: colors.black1,
            headerShown: false,
            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="favorite"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: 'Categories',
            activeTintColor: colors.black1,
            headerShown: true,
            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="auto-awesome-motion"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            activeTintColor: colors.black1,
            headerShown: false,
            tabBarIcon: ({focused, size}) => (
              <MaterialIcons
                name="account-circle"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
