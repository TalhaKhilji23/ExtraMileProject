import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../global/globalStyles';

export default function SubTotal({sub}) {
  return (
    <View>
      <Text style={styles.txt2}>{sub}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt2: {
    marginTop: 15,
    color: 'grey',
    fontSize: 20,
    marginRight: 20,
    color: colors.black1,
    fontWeight: 'bold',
  },
});
