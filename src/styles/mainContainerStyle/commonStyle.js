import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Color from 'react-native-material-color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'CircularStd-BlackItalic',
  },
  textInputStyle: {
    backgroundColor: '#ccc',
    width: 300,
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 14,
  },
  button: {
    backgroundColor: '#fce4ec',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  headerConatinerStyle: {
    width: '100%',
    height: 90,
    backgroundColor:'#0D896C',
    flexDirection:'column',
  },
  
  mediumTextStyle: {
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
    color:'#fff'
  },
  imageStyle:{
    width:60,
    height:60,
    borderRadius:62.5,
  },
  headerTitleStyle:{
    fontSize:24,
    fontFamily: 'CircularStd-Book',
    color: '#ffffff',
  },
  

});

export {styles};
