import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors} from '../global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function LogIn({navigation}) {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.text}>Welcome to </Text>
        <View>
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 50,
              width: 220,
              marginTop: '5%',
              alignSelf: 'center',
            }}
          />
        </View>

        <View>
          <TextInput
            placeholder="Enter your email"
            style={styles.TextInput}></TextInput>
        </View>
        <View style={[styles.TextInput, {marginTop: '5%'}]}>
          <TextInput
            style={styles.text2}
            placeholder="Enter your password"
            secureTextEntry={true}></TextInput>
          <Animatable.View animation={'fadeInDown'} duration={400}>
            <MaterialIcons
              name="visibility-off"
              style={{
                color: 'grey',
                alignSelf: 'flex-end',
                marginRight: '5%',
                marginTop: -37,
              }}
              size={20}
            />
          </Animatable.View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.text3}> Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DrawerNavigation');
          }}
          style={styles.btnShape}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.bottomLine}>
          <Text style={styles.text4}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.text5}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.cardBackground,
  },
  text: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: '20%',
    color: colors.black1,
    fontWeight: '600',
  },
  TextInput: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#F7F8F9',
    borderRadius: 8,
    marginTop: '15%',
    height: 56,
    paddingLeft: 20,
    paddingTop: 5,

    fontFamily: 'Urbanist',
    color: '#8391A1',
    fontWeight: '100',
    fontSize: 15,
  },
  text2: {
    fontFamily: 'Urbanist',
    color: '#8391A1',
    fontWeight: '100',
    fontSize: 15,
  },
  text3: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '2%',
    color: '#6A707C',
    fontFamily: 'Urbanist',
    fontWeight: '600',
  },
  btnShape: {
    backgroundColor: colors.black1,
    height: 50,
    width: '80%',
    alignSelf: 'center',
    marginTop: '15%',
    borderRadius: 8,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    color: colors.cardBackground,
    fontWeight: '400',
  },
  bottomLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '40%',
  },
  text4: {
    fontWeight: '500',
    color: '#1E232C',
    fontFamily: 'Urbanist',
    fontSize: 13,
  },
  text5: {
    fontWeight: '700',
    color: colors.black1,
    marginLeft: 5,
    fontFamily: 'Urbanist',
    fontSize: 14,
  },
});
