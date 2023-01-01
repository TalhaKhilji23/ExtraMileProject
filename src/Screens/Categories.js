import * as React from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {colors} from '../global/globalStyles';

const FirstRoute = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Heloo</Text>
    </View>
  );
};
const SecondRoute = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Heloo2</Text>
    </View>
  );
};
const Third = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Heloo3</Text>
    </View>
  );
};
const Fourth = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Heloo4</Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: Third,
  fourth: Fourth,
});

export default function Categories() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Engine'},
    {key: 'second', title: 'Brakes'},
    {key: 'third', title: 'Tyres'},
    {key: 'fourth', title: 'Exhaust'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabStyle={styles.tabStyle}
      indicatorStyle={{backgroundColor: 'pink'}}
      // initialLayout={{width: layout.width}}
    />
  );
}
const styles = StyleSheet.create({
  tabStyle: {
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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

  view4: {
    color: colors.cardBackground,
    backgroundColor: colors.black1,
    height: 33,
    width: 39,
    marginTop: -90,
    borderRadius: 50,
    marginLeft: 5,
  },
});
