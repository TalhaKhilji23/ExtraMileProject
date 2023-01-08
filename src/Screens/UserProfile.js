/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const logoutAlert = () => {
  Alert.alert(
    'Log Out',
    'Are you sure?',
    [
      {
        text: 'Log Out',
        onPress: () => Alert.alert('Logged Out.'),
        style: 'Cancel',
      },
      {
        text: 'Cancel',
        style: 'Cancel',
      },
    ],
    {
      cancelable: true,
    },
  );
};

const deleteAlert = () => {
  Alert.alert(
    'Delete Account',
    'By deleting your account, all information will be deleted.                             Do you wish to proceed?',
    [
      {
        text: 'Delete',
        onPress: () => Alert.alert('Deleted Account.'),
        style: 'Cancel',
      },
      {
        text: 'Cancel',
        style: 'Cancel',
      },
    ],
    {
      cancelable: true,
    },
  );
};
function UserProfile({navigation}) {
  return (
    <ScrollView
      style={{flex: 1, width: '100%', height: '100%', marginVertical: '5%'}}>
      <View style={{padding: '10%'}}>
        <View style={{}}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 250,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginVertical: '5%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpdateProfile');
            }}
            style={{
              backgroundColor: '#282931',
              flexDirection: 'row',
              padding: '2%',
              width: '45%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="camera" size={14} color="white" />
            <Text
              style={{
                fontFamily: 'Sans-Serif',
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                marginLeft: '5%',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Name</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>Saif Alvey</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Email</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>saif.alvey@gmail.com</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Phone</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>+923215100097</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Payment Address</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>
              H. no 21D Adyala Road Rawalpindi.
            </Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Delivery Address</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>
              H. no 21D Adyala Road Rawalpindi.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '10%',
            paddingHorizontal: '10%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.button_view} onPress={deleteAlert}>
            <Text style={styles.view_text1}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_view} onPress={logoutAlert}>
            <Text style={styles.view_text2}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outer_text: {
    fontFamily: 'Sans-Serif',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 5,
    paddingBottom: '1%',
  },
  text_view: {
    backgroundColor: '#E4EDEC',
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    borderRadius: 15,
  },
  outer_view: {
    paddingVertical: '3%',
  },
  view_text1: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    color: 'red',
    padding: '3%',
    fontWeight: '600',
  },
  view_text2: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    color: 'black',
    fontWeight: '600',
  },
  inner_text: {
    fontFamily: 'Sans-Serif',
    fontSize: 14,
    color: '#4F4F4F',
    marginLeft: 5,
  },
  button_view: {
    backgroundColor: '#E4EDEC',
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserProfile;
