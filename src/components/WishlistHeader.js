import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function WishlistHeader() {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 60,
            color: 'black',
            fontSize: 20,
          }}>
          Details Screen
        </Text>
        <MaterialIcons
          name="favorite-outline"
          style={{color: '#404040', marginLeft: 70, fontWeight: '100'}}
          size={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
