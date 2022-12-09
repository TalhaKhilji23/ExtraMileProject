import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Pressable,
  TextInput,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import {productData} from '../global/Data';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

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
          marginBottom: 25,
        }}>
        <MaterialIcons
          name="menu"
          style={{color: 'black', marginLeft: 20, marginTop: 16, height: 30}}
          size={30}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <View style={{marginTop: 10}}>
          <View style={styles.textInput2}>
            <Animatable.View animation={'fadeInLeft'} duration={800}>
              <MaterialIcons
                name="search"
                style={{color: '#002C4F'}}
                size={20}
              />
            </Animatable.View>

            <TextInput
              style={{width: '75%', height: 40}}
              placeholder={'Search you wishlist .... '}
            />

            <Animatable.View animation={'fadeInLeft'} duration={800}>
              <MaterialIcons
                name="sort"
                style={{color: '#002C4F', marginRight: 10}}
                size={20}
              />
            </Animatable.View>
          </View>
        </View>
      </View>
      <View>
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
                    price={item.price}
                  />
                </View>
              </TouchableOpacity>
            )}
            horizontal={false}
            verticalScrollIndicator={false}
            numColumns={2}
          />
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
    marginBottom: 0,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 22,
    marginHorizontal: 20,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
});
