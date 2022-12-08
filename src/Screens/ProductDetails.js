import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {productData} from '../global/Data';
import {add} from 'react-native-reanimated';

export default function Details({route}) {
  const {id} = route.params;
  const img = productData[id].images;
  const name = productData[id].productName;
  const company = productData[id].company;
  const description = productData[id].description;
  const address = productData[id].businessAddress;

  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          ...styles.image,
          width: 350,
          height: 300,
          marginLeft: 20,
          borderRadius: 12,
        }}
        source={{uri: img}}></Image>

      <View>
        <Text style={styles.Text}>Product : </Text>
        <Text style={{color: 'grey', marginLeft: 30}}>{name}</Text>
      </View>
      <View>
        <Text style={styles.Text}>Company : </Text>
        <Text style={{color: 'grey', marginLeft: 30}}>{company}</Text>
      </View>
      <View>
        <Text style={styles.Text}>Description :</Text>
        <Text style={{color: 'grey', marginLeft: 30}}>{description}</Text>
      </View>
      <View>
        <Text style={styles.Text}>BusinessAddress : </Text>
        <Text style={{color: 'grey', marginLeft: 30}}>{address}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 30,
    margin: 20,
  },
});
