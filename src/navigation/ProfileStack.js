import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartHeader from '../components/CartHeader';
import GeneralHeader from '../components/GeneralHeader';

import UserProfile from '../Screens/UserProfile';
import UpdateProfile from '../Screens/UpdateProfile';
const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        // initialRouteName="Settings"
        initialRouteName="UserProfile">
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{
            headerTitle: props => (
              <GeneralHeader
                {...props}
                style={{
                  marginLeft: '18%',
                  fontWeight: '700',
                  fontSize: 20,
                  color: 'black',
                }}
                text="Car Details"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
