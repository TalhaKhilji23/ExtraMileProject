import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../global/globalStyles';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Validate form
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      Alert.alert('Kindly Fill the form ');
      return;
    }

    // Form is valid, send the message
    // ...
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        value={name}
        onChangeText={setName}
        placeholder=" Enter Name"
      />
      <TextInput
        style={styles.TextInput}
        value={email}
        onChangeText={setEmail}
        placeholder=" Enter Email"
      />
      <TextInput
        style={[styles.TextInput,{height:150,paddingBottom:90}]}
        value={message}
        onChangeText={setMessage}
        multiline
        placeholder=" Enter Message"
      />
      <TouchableOpacity
        style={{
          backgroundColor: colors.black1,
          height: 60,
          alignSelf: 'center',
          width: '70%',
          borderRadius: 10,
          marginTop: '15%',
        }}
        onPress={handleSubmit}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 21,
            marginTop: 10,
            color: colors.cardBackground,
            fontWeight: '600',
          }}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.cardBackground,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
  },
  TextInput: {
    alignSelf: 'center',
    width: '90%',
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
});

export default ContactUs;
