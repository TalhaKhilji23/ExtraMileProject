import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/navigation/Root';
import {colors} from './src/global/globalStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.black1} />
      <Root />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
