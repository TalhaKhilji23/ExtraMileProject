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
import {colors} from '../global/globalStyles';

export const ProductCard = ({
  navigation,
  productName,

  price,

  images,
  screenWidth,
}) => {
  return (
    <View style={{...styles.cardView, width: screenWidth}}>
      <Image
        style={{...styles.image, width: screenWidth, borderRadius: 12}}
        source={{uri: images}}></Image>
      <View style={styles.view1}>
        <View style={styles.view2}></View>
        <View style={styles.view3}>
          
        </View>
        <View style={styles.view5}></View>
      </View>

      <View>
        <Text style={styles.productName}>{productName}</Text>
      </View>

      <View>
        <View>
          <Text style={styles.productPrice}>{price} </Text>
        </View>
      </View>
    </View>
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
    height: '65%',
    borderRadius: 5,
  },
  productName: {
    fontSize: 17,
    color: colors.black1,
    marginLeft: '8%',
    alignSelf: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black1,
    marginLeft: '8%',
    alignSelf: 'center',
  },
  view1: {
    flexDirection: 'row',
    height: '12%',
    width: 1,
  },
  view2: {
    backgroundColor: colors.cardBackground,
    width: 15,
    height: 15,
    borderRadius: 25,
    marginTop: -7,
    marginLeft: 50,
    marginRight: -10,
  },
  view3: {
    backgroundColor: colors.cardBackground,
    width: 60,
    height: 60,
    borderRadius: 12,
    marginTop: -15,
  },
  view5: {
    backgroundColor: colors.cardBackground,
    width: 15,
    height: 15,
    borderRadius: 25,
    marginTop: -7,
    marginLeft: -10,
  },
});
