import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
// import {Icon} from '@rneui/themed';
const SCREEN_WIDTH = Dimensions.get('window').width;
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const ProductCard = ({
  productName,

  price,

  images,
  screenWidth,
}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth, borderRadius: 12}}
          source={{uri: images}}></Image>
        <View
          style={{
            flexDirection: 'row',
            height: 25,
            width: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 15,
              height: 15,
              borderRadius: 25,
              marginTop: -7,
              marginLeft: 54,
              marginRight: -10,
            }}></View>
          <View
            style={{
              backgroundColor: 'white',
              width: 60,
              height: 60,
              borderRadius: 25,
              marginTop: -19,
            }}>
            <View
              style={{
                color: 'white',
                backgroundColor: 'black',
                height: 33,
                width: 39,
                marginTop: 6,
                borderRadius: 50,
                marginLeft: 10,
              }}>
              <MaterialIcons
                name="local-mall"
                style={{color: 'white', marginLeft: 10, marginTop: 4}}
                size={20}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 15,
              height: 15,
              borderRadius: 25,
              marginTop: -7,
              marginLeft: -10,
            }}></View>
        </View>

        <View>
          <Text style={styles.productName}>{productName}</Text>
        </View>

        <View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
                alignSelf: 'center',
              }}>
              {price}{' '}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'lightgrey',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "65%",
    borderRadius: 5,
  },
  productName: {
    fontSize: 17,
    color: 'black',
    marginLeft: '8%',
    alignSelf: 'center',
  },
});
