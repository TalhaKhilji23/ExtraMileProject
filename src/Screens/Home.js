import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  FlatList,
  Pressable,
  TextInput,
  Image,
  Alert,
  Dimensions,
  Button,
  Animated,
} from 'react-native';
import {ProductCard2} from '../components/ProductCard2';
import React, {useState, useEffect} from 'react';
import {colors} from '../global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {useIsFocused} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import {productData} from '../global/Data';

import LinearGradient from 'react-native-linear-gradient';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_Height = Dimensions.get('window').height;

export default function Home({navigation}) {
  const isfocussed = useIsFocused();
  const index2 = 10;
  const currentValue = new Animated.Value(1);

  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const [List, setList] = useState([{}]);
  const [clicked, setClicked] = useState(false);
  const likeHander = () => {
    if (liked == false) setVisible(true);

    setLiked(!liked);
    setCounter(index2);
  };

  useEffect(() => {
    if (liked == true) {
      Animated.timing(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(currentValue, {
          toValue: 1,
          useNativeDriver: true,
          friction: 2,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);
  useEffect(() => {
    setList(productData);
  }, [isfocussed]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            width: '100%',
            marginLeft: '3%',
            marginBottom: '5%',
          }}>
          <MaterialIcons
            name="menu"
            style={{
              color: colors.black1,
              marginLeft: 20,
              marginTop: 16,
              height: 30,
            }}
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
                  style={{color: colors.black1}}
                  size={20}
                />
              </Animatable.View>

              <TextInput
                style={{width: '80%', height: 40}}
                placeholder={'What are you looking for.... '}
              />

              <Animatable.View animation={'fadeInLeft'} duration={800}>
                <MaterialIcons
                  name="sort"
                  style={{color: colors.black1, marginRight: '5%'}}
                  size={20}
                />
              </Animatable.View>
            </View>
          </View>
        </View>
        <Text
          style={{
            backgroundColor: 'lightgrey',
            height: 25,
            width: 90,
            color: 'white',
            alignSelf: 'flex-end',
            borderRadius: 12,
            marginRight: 20,
            paddingLeft: 10,
          }}
          onPress={() =>
            navigation.navigate('Cart', {Lust: List, listToSet: setList})
          }>
          Add to Cart
        </Text>
        {/* onPress={() => navigation.navigate('TabNavigation')} */}

        <View style={{height: '12%'}}>
          <Swiper autoplay={true} autoplayTimeout={4} style={{height: 150}}>
            <TouchableOpacity style={{marginTop: 20, height: 150}}>
              <LinearGradient
                colors={['#000000', '#282931', '#6A6A6A']}
                style={[styles.linearGradient]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View>
                    <Text style={styles.First}>Best Selling Plugs </Text>
                    <Text style={styles.Second}>30% OFF on NGK</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.Third}>Shop Now</Text>
                      <MaterialIcons
                        name="east"
                        style={{
                          color: colors.cardBackground,
                          marginLeft: 10,
                          marginTop: 5,
                          height: 30,
                        }}
                        size={30}
                        // onPress={() => {
                        //   navigation.toggleDrawer();
                        // }}
                      />
                    </View>
                  </View>
                  <Image
                    style={{
                      height: 60,
                      width: 80,
                      marginTop: 30,
                      marginLeft: '10%',
                    }}
                    source={require('../assets/plug2.png')}></Image>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 20, height: 150}}>
              <LinearGradient
                colors={['#000000', '#282931', '#6A6A6A']}
                style={styles.linearGradient}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View>
                    <Text style={styles.First}>Best Selling Tyres </Text>
                    <Text style={styles.Second}>10% OFF on DiamondTyres</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.Third}>Shop Now</Text>
                      <MaterialIcons
                        name="east"
                        style={{
                          color: colors.cardBackground,
                          marginLeft: 10,
                          marginTop: 5,
                          height: 30,
                        }}
                        size={30}
                        // onPress={() => {
                        //   navigation.toggleDrawer();
                        // }}
                      />
                    </View>
                  </View>
                  <Image
                    style={{
                      height: 80,
                      width: 90,
                      marginTop: 17,
                      marginLeft: '10%',
                    }}
                    source={require('../assets/tyre.png')}></Image>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 20, height: 150}}>
              <LinearGradient
                colors={['#000000', '#282931', '#6A6A6A']}
                style={styles.linearGradient}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View>
                    <Text style={styles.First}>Best Selling Brakes </Text>
                    <Text style={styles.Second}>50% OFF on JkBrakes</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.Third}>Shop Now</Text>
                      <MaterialIcons
                        name="east"
                        style={{
                          color: colors.cardBackground,
                          marginLeft: 10,
                          marginTop: 5,
                          height: 30,
                        }}
                        size={30}
                        // onPress={() => {
                        //   navigation.toggleDrawer();
                        // }}
                      />
                    </View>
                  </View>
                  <Image
                    style={{
                      height: 80,
                      width: 90,
                      marginTop: 17,
                      marginLeft: '10%',
                    }}
                    source={require('../assets/brake.png')}></Image>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </Swiper>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 30,
                width: 600,

                height: 120,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setList(productData);
                }}
                style={[styles.tabBarStyles]}>
                <Text
                  style={{
                    alignSelf: 'center',
                    padding: 5,
                    color: 'black',
                  }}>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setList(() => List.filter(item => item.category == 'oils'));
                }}
                style={[styles.tabBarStyles, {marginLeft: 15}]}>
                <Text style={{alignSelf: 'center', padding: 5}}>Oils</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setList(productData);

                  setList(() => List.filter(item => item.category == 'wheel'));
                }}
                style={[styles.tabBarStyles, {marginLeft: 15}]}>
                <Text style={{alignSelf: 'center', padding: 5}}>Wheel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setList(productData);

                  setList(() => List.filter(item => item.category == 'engine'));
                }}
                style={[
                  styles.tabBarStyles,
                  {
                    marginLeft: 15,
                  },
                ]}>
                <Text style={{alignSelf: 'center', padding: 5}}>Engine</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setList(() => List.filter(item => item.category == 'brakes'));
                }}
                style={[styles.tabBarStyles, {marginLeft: 15}]}>
                <Text style={{alignSelf: 'center', padding: 5}}>Brakes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setList(productData);
                  setList(() => List.filter(item => item.category == 'brakes'));
                }}
                style={[styles.tabBarStyles, {marginLeft: 15}]}>
                <Text style={{alignSelf: 'center', padding: 5}}>Interior</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={{marginTop: -30}}>
            <FlatList
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              data={List}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetails', {id: index})
                  }>
                  <View style={styles.imageView}>
                    <ProductCard2
                      screenWidth={SCREEN_WIDTH * 0.425}
                      screenHeight={SCREEN_Height * 0.205}
                      images={item.images}
                      productName={item.productName}
                      price={item.price}
                      margin={20}
                    />

                    <TouchableOpacity
                      // disabled={item.id == 1 && clickCount == 1 ? true : false}
                      onPress={() => {
                        setList([
                          ...List,
                          {
                            myImage: item.images,
                            myName: item.productName,
                            myPrice: item.price,
                            myCompany: item.company,
                            myID: item.id,
                          },
                        ]);
                        // setClickCount(1);
                      }}>
                      <View style={styles.view4}>
                        <MaterialIcons
                          name="local-mall"
                          style={{
                            color: colors.cardBackground,
                            marginLeft: 10,
                            marginTop: 5,
                            height: 30,
                            width: 30,
                          }}
                          size={20}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
              horizontal={true}
            />
          </View>

          <View
            style={{
              backgroundColor: colors.black1,
              height: 200,
              width: '80%',
              marginTop: -30,
              marginBottom: 20,
              borderRadius: 25,
              alignSelf: 'center',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={[
                  styles.Second,
                  {
                    fontWeight: '500',
                    marginTop: 10,
                    marginLeft: 20,
                    fontSize: 16,
                  },
                ]}>
                Search Parts by Cars
              </Text>
              <MaterialIcons
                name="more-horiz"
                style={{
                  color: colors.black2,
                  marginTop: 5,
                  marginRight: 20,
                  height: 30,
                }}
                size={30}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={[
                    styles.First,
                    {fontWeight: 'bold', marginLeft: 30, fontSize: 21},
                  ]}>
                  Honda Civic
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons
                      name="offline-bolt"
                      style={{
                        color: 'lightgrey',
                        height: 20,
                        marginLeft: 40,
                      }}
                      size={18}
                    />
                    <Text style={[styles.Second, {fontSize: 12}]}>CVT-I</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons
                      name="network-cell"
                      style={{
                        color: 'lightgrey',
                        height: 20,
                        marginLeft: 40,
                      }}
                      size={15}
                      onPress={() => {
                        navigation.toggleDrawer();
                      }}
                    />
                    <Text style={[styles.Second, {fontSize: 12}]}>2022</Text>
                  </View>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward"
                  style={{
                    color: 'black',
                    height: 35,
                    borderRadius: 50,
                    marginLeft: 70,
                    marginTop: 25,
                    width: 35,
                    padding: 7,
                    backgroundColor: 'white',
                  }}
                  size={20}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: 'grey',
                width: 280,
                alignSelf: 'center',
                marginTop: 10,
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: -10,
              }}>
              <View>
                <Text
                  style={[
                    styles.First,
                    {fontWeight: 'bold', marginLeft: 30, fontSize: 21},
                  ]}>
                  Toyota Corolla
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons
                      name="offline-bolt"
                      style={{
                        color: 'lightgrey',
                        height: 20,
                        marginLeft: 40,
                      }}
                      size={18}
                      onPress={() => {
                        navigation.toggleDrawer();
                      }}
                    />
                    <Text style={[styles.Second, {fontSize: 12}]}>VVT -I</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons
                      name="network-cell"
                      style={{
                        color: 'lightgrey',
                        height: 20,
                        marginLeft: 40,
                      }}
                      size={15}
                      onPress={() => {
                        navigation.toggleDrawer();
                      }}
                    />
                    <Text style={[styles.Second, {fontSize: 12}]}>1994</Text>
                  </View>
                </View>
              </View>
              <View>
                <MaterialIcons
                  name="arrow-forward"
                  style={{
                    color: 'black',
                    height: 35,
                    borderRadius: 50,
                    marginLeft: 70,
                    marginTop: 25,
                    width: 35,
                    padding: 7,
                    backgroundColor: 'white',
                  }}
                  size={20}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.cardBackground,
  },
  textInput2: {
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 22,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginRight: '20%',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 35,
    borderRadius: 12,
    width: '85%',
    height: '85%',
    alignSelf: 'center',
  },
  First: {
    fontSize: 18,
    fontFamily: 'sans-serif-light',
    margin: 10,
    marginLeft: 10,
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  Second: {
    fontSize: 14,
    fontFamily: 'sans-serif-light',
    marginLeft: 10,
    fontWeight: '100',
    color: 'lightgrey',
    backgroundColor: 'transparent',
  },
  Third: {
    fontSize: 14,
    fontFamily: 'sans-serif-light',
    margin: 10,
    marginLeft: 10,
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  view4: {
    color: colors.cardBackground,
    backgroundColor: colors.black1,
    height: 33,
    width: 39,
    marginTop: -87,
    borderRadius: 50,
    marginLeft: 85,
  },
  tabBarStyles: {
    backgroundColor: '#F6F6F6',
    color: 'black',
    width: '15%',
    height: '24%',
    marginTop: '12%',
    borderRadius: 15,
  },
});
