import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CartCard from '../components/CartCard';
import SubTotal from '../components/SubTotal';
import {productData} from '../global/Data';
export default function Cart({route}) {
  // const [event, setEvent] = useState('');
  // const [date, setDate] = useState('');
  // const [clicked, setClicked] = useState(true);
  const [count, setCount] = useState(1);
  const [subtotal, setSubTotal] = useState(0);
  const [inital, setinital] = useState(0);

  const [total, setTotal] = useState(0);

  const {Lust, listToSet} = route.params;

  const deleteItem = key => {
    listToSet(() => Lust.filter(item => item.myID != key));
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.cardBackground}}>
      <View
        style={{
          marginTop: 20,
          height: 360,
          width: 372,
          marginLeft: 10,
        }}>
        <ScrollView>
          {Lust.map(item => (
            <ScrollView keyboardShouldPersistTaps="handled">
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
                  <CartCard
                    images={item.myImage}
                    productName={item.myName}
                    productPrice={item.myPrice}
                    company={item.myCompany}
                    list={Lust}
                    setList={listToSet}
                    itemnumber={item}
                    setsubi={setSubTotal}
                    productID={item.myID}
                  />
                  {/* <View style={styles.cartStyle}>
                    <Image
                      style={{
                        ...styles.image,
                        width: 80,
                        height: 80,
                        marginLeft: 10,
                        borderRadius: 12,
                        marginTop: 15,
                      }}
                      source={{uri: item.myImage}}></Image>

                    <View>
                      <View>
                        <Text
                          onPress={() => {
                            setUpdateHook(Lust);
                          }}
                          style={styles.productName}>
                          {item.myName}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.productPrice}>{item.myPrice}</Text>
                      </View>
                      <View style={{flexDirection: 'row', marginLeft: 20}}>
                        <TouchableOpacity
                          onPress={() => {
                            setCount(count + 1);

                            setSubTotal(count * item.myPrice);
                          }}>
                          <MaterialIcons
                            name="control-point"
                            style={{
                              color: 'grey',
                              fontWeight: '100',
                              marginTop: 2,
                            }}
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
                          {count - 1}
                        </Text>
                        <TouchableOpacity
                          disabled={count <= 1 ? true : false}
                          onPress={() => {
                            setCount(count - 1);

                            setSubTotal(count * item.myPrice);
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
                      <Text style={styles.company}>{item.myCompany}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          deleteItem(item.myID);
                        }}>
                        <MaterialIcons
                          name="delete-outline"
                          style={{color: 'red', marginTop: 5, marginLeft: 20}}
                          size={25}
                        />
                      </TouchableOpacity>
                    </View>
                  </View> */}
                </View>
              </View>
            </ScrollView>
          ))}
        </ScrollView>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.giftCard}> Gift Card / Discount Code</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.textInput2}>
            <TextInput
              style={{width: '55%', height: 40, marginLeft: 10, fontSize: 17}}
              placeholder={'Discount Code'}
            />
          </View>
          <TouchableOpacity style={{height: 40, marginTop: 10}}>
            <View
              style={{
                backgroundColor: '#F3F3F3',
                borderRadius: 25,
                height: 40,
                width: 60,
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  alignSelf: 'center',
                  marginTop: 7,
                  color: colors.black1,
                }}>
                Apply
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.txt1}>SubTotal</Text>
        {/* <Text style={styles.txt2}>{subtotal}</Text> */}
        <SubTotal sub={subtotal}></SubTotal>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.txt1}>Shipping</Text>
        <Text style={styles.txt2}> Rs 500</Text>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          marginTop: 10,
          width: 350,
          alignSelf: 'center',
          borderStyle: 'dashed',
          borderColor: 'lightgrey',
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={styles.txt1}
          onPress={() => {
            setTotal(subtotal + 500);
          }}>
          Total
        </Text>
        <Text style={styles.txt2}>{total}</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.black1,
          height: 50,
          borderRadius: 12,
          width: 350,
          alignSelf: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: colors.cardBackground,
            justifyContent: 'center',
            marginLeft: '40%',
            fontSize: 19,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Checkout
        </Text>
        <MaterialIcons
          name="east"
          style={{
            color: colors.cardBackground,
            marginLeft: 30,
            marginTop: 10,
          }}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  giftCard: {
    marginLeft: 20,
    fontSize: 18,
    color: '#718096',
    fontWeight: '500',
    marginTop: 10,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginLeft: 20,
    width: '70%',
    marginTop: 10,
    height: 50,
  },
  txt1: {
    marginTop: 15,
    marginLeft: 20,
    color: colors.black2,
    fontSize: 18,
  },
  txt2: {
    marginTop: 15,
    color: 'grey',
    fontSize: 20,
    marginRight: 20,
    color: colors.black1,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 16,
    color: colors.black1,
    marginLeft: 30,
    margin: 20,
  },
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
