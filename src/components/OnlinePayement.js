
import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
export default function OnlinePayment() {
  return (
    <View>
      <View style={{paddingVertical: '10%'}}>
        <TextInput
          style={{
            backgroundColor: '#F7F8F9',
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            padding: '4%',
            borderRadius: 10,
          }}
          placeholder="Mastercard ending 234"
          placeholderTextColor="#535353"
        />
        <Text
          style={{
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            marginLeft: '1%',
            marginTop: '5%',
            marginBottom: '3%',
          }}>
          Name on Card
        </Text>
        <TextInput
          style={{
            backgroundColor: '#F7F8F9',
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            padding: '4%',
            borderRadius: 10,
          }}
          placeholder="Muhammad Hammad"
          placeholderTextColor="#535353"
        />
        <Text
          style={{
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            marginLeft: '1%',
            marginTop: '5%',
            marginBottom: '3%',
          }}>
          Card Number
        </Text>
        <TextInput
          style={{
            backgroundColor: '#F7F8F9',
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            padding: '4%',
            borderRadius: 10,
          }}
          placeholder="123 - 456 - 789 - 111 - 4793"
          placeholderTextColor="#535353"
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              marginLeft: '1%',
              marginTop: '5%',
              marginBottom: '3%',
            }}>
            Expiration
          </Text>
          <Text
            style={{
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              marginTop: '5%',
              marginBottom: '3%',
              marginLeft: '45%',
            }}>
            CVC
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              backgroundColor: '#F7F8F9',
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              padding: '4%',
              borderRadius: 10,
              width: '20%',
            }}
            placeholder="03"
            placeholderTextColor="#535353"
          />
          <Text style={{marginLeft: '5%', fontSize: 25, color: '#535353'}}>
            /
          </Text>
          <TextInput
            style={{
              backgroundColor: '#F7F8F9',
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              padding: '4%',
              borderRadius: 10,
              width: '20%',
              marginLeft: '5%',
            }}
            placeholder="24"
            placeholderTextColor="#535353"
          />
          <TextInput
            style={{
              backgroundColor: '#F7F8F9',
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              padding: '4%',
              borderRadius: 10,
              width: '30%',
              marginLeft: '20%',
            }}
            placeholder="123"
            placeholderTextColor="#535353"
          />
        </View>
      </View>
    </View>
  );
}
