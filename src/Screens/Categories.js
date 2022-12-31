import * as React from 'react';
import {View, useWindowDimensions,StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import { colors } from '../global/globalStyles';

const FirstRoute = () => {
  return(
    <View style={{flex: 1, backgroundColor: 'white'}} />
  );
};
const SecondRoute = () => {
  return <View style={{flex: 1, backgroundColor: 'white'}} />;
};
const Third = () => {
  return <View style={{flex: 1, backgroundColor: 'white'}} />;
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: Third,
});

export default function Categories() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
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
