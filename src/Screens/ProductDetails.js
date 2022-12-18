import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import {productData} from '../global/Data';
import {add} from 'react-native-reanimated';
import {colors} from '../global/globalStyles';

export default function ProductDetails({route}) {
  const {id} = route.params;
  const img = productData[id].images;
  const name = productData[id].productName;
  const price = productData[id].price;
  const description = productData[id].description;
  const address = productData[id].businessAddress;



  return (
    <View style={{flex: 1, backgroundColor: colors.cardBackground}}>
      <ScrollView>
        <Image
          style={{
            ...styles.image,
            width: 350,
            height: 300,
            marginLeft: 20,
            borderRadius: 12,
            marginTop: 20,
          }}
          source={{uri: img}}></Image>
       

        <View>
          <Text style={styles.Text}>Product : </Text>
          <Text style={{color: 'grey', marginLeft: 30}}>{name}</Text>
        </View>
        <View>
          <Text style={styles.Text}>Company : </Text>
          <Text style={{color: 'grey', marginLeft: 30}}>{price}</Text>
        </View>
        <View>
          <Text style={styles.Text}>Description :</Text>
          <Text style={{color: 'grey', marginLeft: 30}}>{description}</Text>
        </View>
        <View>
          <Text style={styles.Text}>BusinessAddress : </Text>
          <Text style={{color: 'grey', marginLeft: 30}}>{address}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    color: colors.black1,
    marginLeft: 30,
    margin: 20,
  },
});
