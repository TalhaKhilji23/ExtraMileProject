import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ProductDetails from '../Screens/ProductDetails';
import DrawerNavigation from './DrawerNavigation';
import Details from '../Screens/ProductDetails';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ProductDetails" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
