import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/navigation/Root';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} backgroundColor={"black"} />
    <Root />
  </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
});
