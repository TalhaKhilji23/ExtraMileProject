import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import {productData} from '../global/Data';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ProductCard} from '../components/ProductCard';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Wishlist({navigation}) {
  return (
    <View style={{flex: 1, marginLeft: 5, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          width: 350,
          marginLeft: 10,
          marginBottom: 10,
        }}>
        <MaterialIcons
          name="email"
          style={{color: 'black', marginLeft: 20, marginTop: 10}}
          size={20}
        />
        <View
          style={{
            backgroundColor: 'lightgrey',
            height: 35,
            width: 288,
            borderRadius: 60,
            marginLeft: 30,
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <MaterialIcons
            name="email"
            style={{color: 'grey', marginLeft: 20, marginTop: 4}}
            size={20}
          />
          <Text style={{marginLeft: 50, marginTop: 5, fontSize: 14}}>
            Search for the wishlist
          </Text>
          <MaterialIcons
            name="email"
            style={{color: 'grey', marginLeft: 40, marginTop: 4}}
            size={20}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <FlatList
            style={{marginBottom: 10}}
            data={productData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', {id: index})
                }>
                <View style={styles.imageView}>
                  <ProductCard
                    screenWidth={SCREEN_WIDTH * 0.425}
                    images={item.images}
                    productName={item.productName}
                    company={item.company}
                  />
                </View>
              </TouchableOpacity>
            )}
            horizontal={false}
            verticalScrollIndicator={false}
            numColumns={2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.3775,
    height: SCREEN_WIDTH * 0.6275,
    marginLeft: 30,
    marginBottom: 30,
  },
});
