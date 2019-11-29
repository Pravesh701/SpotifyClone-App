import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerConatinerStyle: {
    backgroundColor: '#26a69a',
    width: wp('100%'),
    height: hp('10%'),
    flexDirection:'row',
    paddingTop:30,
  },
  headerTitleStyle: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 20,
    color: 'black',
    marginLeft:40
  },
});
export {styles};
