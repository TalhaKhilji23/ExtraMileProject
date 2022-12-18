import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
