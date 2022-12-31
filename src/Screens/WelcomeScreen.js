import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../global/globalStyles';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#2C2B34'}}>
      <View>
        <Image
          source={require('../assets/remocar.png')}
          style={{
            marginTop: 60,
            height: 500,
            width: 500,
            marginLeft: -170,
            marginRight: 150,
          }}></Image>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 28,
            marginLeft: 30,
            marginTop: -60,
            fontFamily: 'Barlow',
          }}>
          Best car parts
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 28,
              marginLeft: 30,
              fontFamily: 'Barlow',
            }}>
            Enjoy an
          </Text>
          <View>
            <Image
              source={require('../assets/whitelogo.png')}
              style={{height: 50, width: 210, marginLeft: 10}}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: '#8E8E8E',
              fontSize: 15,
              marginLeft: 30,
              fontWeight: '300',
              fontFamily: 'Barlow',
            }}>
            Premium and prestige car spare parts
          </Text>
          <Text
            style={{
              color: '#8E8E8E',
              fontSize: 15,
              marginLeft: 30,
              fontWeight: '300',
              fontFamily: 'Ariel',
            }}>
            Experience your as new once again.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LogIn');
          }}
          style={{
            backgroundColor: '#FFFFFF',
            height: 50,
            width: '80%',
            alignSelf: 'center',
            marginTop: 50,
            borderRadius: 25,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 21,
              marginTop: 10,
              color: colors.black1,
              fontWeight: '600',
            }}>
            Let's Go
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
