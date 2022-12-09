import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
const Drawer = createDrawerNavigator();
import TabNavigation from './TabNavigation';
import DrawerContents from '../components/DrawerContents';
export default function DrawerNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={props => <DrawerContents {...props} />}>
        <Drawer.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            title: 'Home',
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
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
