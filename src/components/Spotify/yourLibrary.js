import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createAppContainer} from 'react-navigation'; 
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import constants, {vh, vw, DesignHeight, DesignWidth} from '../../constants';

import AppNavigator from './libraryTab/index';

const LibraryIndex = createAppContainer(AppNavigator);


export default class YourLibrary extends Component {
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#333', '#333']}>
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <View style={styles.headerTextContainerStyle}>
            <Text style={styles.textHeaderStyle}>Music</Text>
            <Text style={styles.podcastTextStyle}>Podcasts</Text>
          </View>
          <LibraryIndex />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaViewStyle: {
    width: wp('100%'),
    height: hp('100%'),
  },
  headerTextContainerStyle: {
    flexDirection: 'row',
  },
  textHeaderStyle: {
    fontSize: vw(30),
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    marginLeft: vw(10),
  },
  podcastTextStyle: {
    fontSize: vw(30),
    fontFamily: 'CircularStd-Bold',
    color: '#9e9e9e',
    marginLeft: vw(10),
  },
});
