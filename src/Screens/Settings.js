import React from 'react';
import {View, Text, FlatList, TouchableOpacity,StyleSheet} from 'react-native';

const settings = [
  {
    name: 'Notifications',
    value: true,
  },
  {
    name: 'Dark Mode',
    value: false,
  },
  {
    name: 'Language',
    value: 'English',
  },
  {
    name: 'Notifications',
    value: true,
  },
  {
    name: 'Dark Mode',
    value: false,
  },
  {
    name: 'Language',
    value: 'English',
  },
  {
    name: 'Notifications',
    value: true,
  },
  {
    name: 'Dark Mode',
    value: false,
  },
  {
    name: 'Language',
    value: 'English',
  },
];

const Settings = () => {
  const renderSetting = ({item}) => (
    <TouchableOpacity style={styles.setting}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.value}>
        {item.value === true ? (
          <Text>On</Text>
        ) : item.value === false ? (
          <Text>Off</Text>
        ) : (
          <Text>{item.value}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        renderItem={renderSetting}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 16,
  },
  value: {},
});

export default Settings;
