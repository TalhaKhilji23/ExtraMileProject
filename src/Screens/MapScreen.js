import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function MapScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: '50%'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../assets/Maps.png')}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '22%',
          backgroundColor: '#282931',
          marginTop: '-5%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: '10%',
            marginLeft: '5%',
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Your location
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '15%',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '-13%',
          borderRadius: 15,
        }}>
        <Text
          style={{
            marginTop: '5%',
            marginLeft: '4%',
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Khanna Pul, RawalPindi
        </Text>
        <Image
          style={{
            width: '40%',
            height: '160%',
            marginLeft: '-15%',
            marginTop: '-46%',
          }}
          source={require('../assets/user.png')}
        />
      </View>

      <Text style={{marginLeft: '10%', fontSize: 17}}>Total Bill</Text>
      <Text style={{marginLeft: '10%', fontSize: 16}}>Rs 37,586</Text>
      <TouchableOpacity
        style={{
          width: '45%',
          height: '8%',
          backgroundColor: 'black',
          borderRadius: 8,
          marginLeft: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2%',
        }}>
        <Text style={{color: 'white', fontSize: 14}}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}
