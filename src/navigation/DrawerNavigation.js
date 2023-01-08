import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
const Drawer = createDrawerNavigator();
import TabNavigation from './TabNavigation';
import DrawerContents from '../components/DrawerContents';
import Categories from '../Screens/Categories';
import MyOrders from '../Screens/MyOrders';
import PaymentLog from '../Screens/PaymentLog';
import Settings from '../Screens/Settings';
import ContactUs from '../Screens/ContactUs';
import {colors} from '../global/globalStyles';
import { color } from 'react-native-reanimated';
export default function DrawerNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{
          drawerStyle: {
            width: 300,
          },
        }}
        drawerContent={props => <DrawerContents {...props} />}>
        <Drawer.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            title: 'Home',
            headerTintColor: 'red',
            headerShown: false,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="home"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Categories',
            headerTintColor: 'red',
            headerShown: false,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="notes"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            title: 'My orders',
            headerTintColor: 'red',
            headerShown: false,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="menu-book"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="PaymentLog"
          component={PaymentLog}
          options={{
            title: 'Payment log',
            headerTintColor: 'red',
            headerShown: false,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="payment"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
            headerTintColor: colors.black1,
            headerShown: true,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="settings"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: 'Contact Us',
            headerTintColor: colors.black1,
            headerShown: true,
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="contact-page"
                color={focused ? '#7cc' : colors.black1}
                size={25}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
