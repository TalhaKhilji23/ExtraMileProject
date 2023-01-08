import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GeneralHeader(props) {
  return (
    <View style={{flex: 1}}>
      <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})