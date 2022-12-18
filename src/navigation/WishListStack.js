import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductDetails from '../Screens/ProductDetails';
import Wishlist from '../Screens/Wishlist';
import WishlistHeader from '../components/WishlistHeader';
import CartHeader from '../components/CartHeader';
import Cart from '../Screens/Cart';
const Stack = createNativeStackNavigator();

export default function WishListStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        // initialRouteName="Settings"
        initialRouteName="Wishlist">
        <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerTitle: props => <CartHeader {...props} />}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerTitle: props => <WishlistHeader {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
