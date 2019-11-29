import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
//import HomeLayout from '../components/homeLayout/homeLayout';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import React, {Component} from 'react';
import {StyleSheet} from  'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from 'react-native-vector-icons/Entypo';
// import MobXSample from '../components/mobXSampleClass/mobXSample';
// import MainToDoClass from '../components/asynkToDoList/main';
// import GoogleMap from '../components/googleMaps/googleMap';

import Home from '../components/Spotify/home';
import Premium from '../components/Spotify/premium';
import YourLibrary from '../components/Spotify/yourLibrary';
import Search from '../components/Spotify/search';


const TabBarComponent = props => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator({


  Home:{
    screen:Home,
  },

  Search:{
    screen: Search,
  },
  
  YourLibrary :{
    screen: YourLibrary,
  },
  Premium: {
    screen: Premium,
  },
  // GoogleMap:{
  //   screen:GoogleMap
  // },

  // MainToDoClass:{
  //   screen: MainToDoClass,
  // },
  
  // MobXSample :{
  //   screen: MobXSample,
  // },
  // Home: {
  //   screen: HomeLayout,
  // },
  
},
{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#9DCA83',
    inactiveTintColor: '#EEE',
   // showLabel: false
  },
  
  tabBarComponent: props => (
    <TabBarComponent {...props} style={styles.container} />
  ),

  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'ios-home';
      } else if (routeName === 'Search') {
        iconName = 'ios-search';
      }
      else if(routeName === 'YourLibrary'){
        iconName = 'ios-funnel';
      }
      else if(routeName === 'Premium'){
        iconName = 'logo-apple';
      }
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
}
);

const styles = StyleSheet.create({
  container:{
     borderTopColor: '#000' ,
     backgroundColor:'rgba(0,0,0,0.6)',
     
  }
})
export default createAppContainer(TabNavigator);


