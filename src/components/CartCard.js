import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {productData} from '../global/Data';
import {add} from 'react-native-reanimated';
import {colors} from '../global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function CartCard({
  navigation,
  productName,
  setListHook,
  passedList,
  pressed,
  productPrice,
  productID,
  company,
  route,

  images,
  screenWidth,
  onpress,
  setList,
  itemnumber,
  list,
  subi,
  setsubi,
  productId,
}) {
  const deleteItem = key => {
    setList(() => list.filter(item => item.myID != key));
  };
  const increment = key => {
    setCount(count + 1);
    console.log(count);

    setsubi(count * productPrice);
  };
  const decrement = key => {
    setCount(count - 1);

    setsubi(count * productPrice);
  };
  const [count, setCount] = useState(1);

  return (
    <View>
      <View
        style={{
          backgroundColor: '#FAF9F6',
          width: '90%',

          marginLeft: 20,
          marginTop: 10,
          paddingBottom: 15,
          paddingTop: -10,
          borderRadius: 10,
        }}>
        <View style={styles.cartStyle}>
          <Image
            style={{
              ...styles.image,
              width: 80,
              height: 80,
              marginLeft: 10,
              borderRadius: 12,
              marginTop: 15,
            }}
            source={{uri: images}}></Image>

          <View>
            <View>
              <Text style={styles.productName}>{productName}</Text>
            </View>
            <View>
              <Text style={styles.productPrice}>{productPrice}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 20}}>
              <TouchableOpacity
                // onPress={() => {
                //   setCount(count + 1);
                // }}
                onPress={() => {
                  increment(productID);
                }}>
                <MaterialIcons
                  name="control-point"
                  style={{color: 'grey', fontWeight: '100', marginTop: 2}}
                  size={25}
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 20,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                {count}
              </Text>
              <TouchableOpacity
                disabled={count <= 1 ? true : false}
                // onPress={() => {
                //   setCount(count - 1);
                // }}
                onPress={() => {
                  decrement(itemnumber.myID);
                }}>
                <MaterialIcons
                  name="remove-circle-outline"
                  style={{color: 'grey', marginTop: 2}}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginLeft: 70, marginTop: 15}}>
            <Text style={styles.company}>{company}</Text>
            <TouchableOpacity
              // onPress={() => {
              //   setListHook(
              //     ...passedList.filter(e => {
              //       e.myID == productID ? true : false;
              //     }),
              //   );
              // }}

              onPress={() => {
                deleteItem(itemnumber.myID);
              }}>
              {/* <TouchableOpacity onPress={() => deleteItem(item.key)}> */}
              <MaterialIcons
                name="delete-outline"
                style={{color: 'red', marginTop: 5, marginLeft: 20}}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartStyle: {
    flexDirection: 'row',
  },
  productName: {
    fontSize: 17,
    color: colors.black1,
    marginLeft: '8%',
    alignSelf: 'center',
    marginTop: 15,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black1,
    marginLeft: 22,
    width: 60,
  },
  company: {
    fontWeight: '500',
    fontSize: 15,
    width: 60,
    height: 40,
    color: '#4F5663',
  },
});
