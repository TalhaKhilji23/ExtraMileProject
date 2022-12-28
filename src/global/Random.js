import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  NavigationContainer,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
function DisplayCars({navigation, route}) {
  var listOfCars = [];
  const [newListOfCars, setListOfCars] = useState([]);
  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem('Car');
      if (!listOfCars.includes(jsonValue)) {
        listOfCars.push(JSON.parse(jsonValue));
        setListOfCars(listOfCars.filter(x => x != null));
        console.log(newListOfCars, 'New list');
      }
    } catch (e) {
      console.log('Data Could not be read', e);
    }
  }
  const Item = ({make, model, engine, color, year, photo}) => (
    <View style={styles.carCardFull}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Car', {
            makeID: make,
            modelID: model,
            engineID: engine,
            colorID: color,
            yearID: year,
            photoID: photo,
          })
        }>
        <Image
          style={{
            resizeMode: 'cover',
            height: 300,
            width: 300,
            borderRadius: 5,
          }}
          source={{
            uri: photo,
          }}
        />
        <Text style={styles.carCard}>Manufacturer: {make}</Text>
        <Text style={styles.carCard}>Model: {model}</Text>
        <Text style={styles.carCard}>CC: {engine}</Text>
        <Text style={styles.carCard}>Year: {year}</Text>
        <Text style={styles.carCard}>Color: {color}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => (
    <Item
      make={item.make}
      model={item.model}
      engine={item.engine}
      color={item.color}
      year={item.year}
      photo={item.photo}
    />
  );
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <FlatList data={newListOfCars} renderItem={renderItem} />
      <Button title="Display Cars" onPress={getData} />
    </View>
  );
}
function CardCars({navigation, route}) {
  const {makeID, modelID, yearID, photoID, colorID, engineID} = route.params;
  const removeCar = async () => {
    var jsonValue = await AsyncStorage.getItem('Car');
    if (makeID == jsonValue.make) {
      jsonValue = jsonValue.filter(() => jsonValue.make != makeID);
      console.log(jsonValue, 'JSOn');
      await AsyncStorage.setItem('Car', jsonValue);
      navigation.navigate('Display Cars');
    }
  };
  return (
    <View>
      <Image
        style={{
          resizeMode: 'cover',
          height: 500,
          width: 400,
          borderRadius: 5,
        }}
        source={{
          uri: photoID,
        }}
      />
      <Text style={styles.carCard}>Manufacturer: {makeID}</Text>
      <Text style={styles.carCard}>Model: {modelID}</Text>
      <Text style={styles.carCard}>CC: {engineID}</Text>
      <Text style={styles.carCard}>Year: {yearID}</Text>
      <Text style={styles.carCard}>Color: {colorID}</Text>
      <Button title="Delete Car" onPress={removeCar} color="#000000" />
    </View>
  );
}
function AddCar({navigation}) {
  const [getMake, setMake] = useState('');
  const [getModel, setModel] = useState('');
  const [getYear, setYear] = useState('');
  const [getEngine, setEngine] = useState('');
  const [getColor, setColor] = useState('');
  const [getPhoto, setPhoto] = useState('');
  async function storeData(
    getMake,
    getModel,
    getYear,
    getEngine,
    getColor,
    getPhoto,
  ) {
    try {
      var carObject = {
        make: getMake,
        model: getModel,
        year: getYear,
        engine: getEngine,
        color: getColor,
        photo: getPhoto,
      };
      const jsonValue = JSON.stringify(carObject);
      await AsyncStorage.mergeItem(getMake, jsonValue);
      console.log('saved');
      setMake('');
      setModel('');
      setYear('');
      setEngine('');
      setColor('');
      setPhoto('');
    } catch (e) {
      console.log('Could not be saved', e);
    }
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Make"
        onChangeText={e => setMake(e)}
        value={getMake}
      />
      <TextInput
        style={styles.input}
        placeholder="Model"
        onChangeText={e => setModel(e)}
        value={getModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        onChangeText={e => setYear(e)}
        value={getYear}
      />
      <TextInput
        style={styles.input}
        placeholder="Engine"
        onChangeText={e => setEngine(e)}
        value={getEngine}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        onChangeText={e => setColor(e)}
        value={getColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Photo"
        onChangeText={e => setPhoto(e)}
        value={getPhoto}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Submit"
          onPress={() =>
            storeData(getMake, getModel, getYear, getEngine, getColor, getPhoto)
          }
          color="#000000"
          disabled={
            getMake.length == 0 ||
            getModel.length == 0 ||
            getPhoto == 0 ||
            getColor == 0 ||
            getEngine == 0
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}></View>
    </View>
  );
}
function ManageCarScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Display Cars">
      <Stack.Screen
        name="Cars"
        component={DisplayCars}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Add Cars')}
              title="Add Car"
            />
          ),
        }}
      />
      <Stack.Screen name="Car" component={CardCars} />
      <Stack.Screen name="Add Cars" component={AddCar} />
    </Stack.Navigator>
  );
}
function ManageCarBrandsScreen({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Toyota',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Honda',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Mercedez',
    },
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
  },
  carCard: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'justify',
  },
  carCardFull: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
});
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="Manage Cars">
        <Drawer.Screen name="Manage Cars" component={ManageCarScreen} />
        <Drawer.Screen
          name="Manage Car Brands"
          component={ManageCarBrandsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
