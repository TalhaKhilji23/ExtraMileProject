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
  orderName,

  company,
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
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                backgroundColor: 'white',
                width: 15,
                height: 15,
                borderRadius: 25,
                marginTop: -7,
                marginLeft: 54,
                marginRight: -10,
              }}></Text>
          </View>
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
                marginTop: 5,
                borderRadius: 50,
                marginLeft: 10,
              }}>
              <MaterialIcons
                name="email"
                style={{color: 'white', alignSelf: 'center'}}
                size={20}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: 'white',
                width: 15,
                height: 15,
                borderRadius: 25,
                marginTop: -7,
                marginLeft: -10,
              }}></Text>
          </View>
        </View>

        <View>
          <Text style={styles.orderName}>{orderName}</Text>
        </View>

        <View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'lightblue',
                marginLeft: 10,
              }}>
              {company}{' '}
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
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
    marginHorizontal: 9,
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
    height: 130,
    borderRadius: 5,
  },
  orderName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 2,
    marginLeft: 10,
  },
});
