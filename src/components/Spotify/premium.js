import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ViewPropTypes,
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import Screen from './components/Screen/Screen';

export default class Premium extends Screen {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  static navigationOptions = {
    title: 'React Native Track Player',
  };

  playMusicSample = () => {
    TrackPlayer.setupPlayer().then(async () => {
      // Adds a track to the queue
      await TrackPlayer.add({
        id: '1111',
        url: require('./components/resources/AnkhiyonSeGoliMare-PatiPatniAurWoh.mp3'),
        title: 'Aankhiyon se Goli mare',
        artist: 'None',
        artwork: require('../../images/spotifyImages/artists/ariana1.png'),
      });

      // Starts playing it
      TrackPlayer.play();
    });
  };

  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#009688', '#4caf50', '#424242', '#000000']}>
        <SafeAreaView>
          <Text style={styles.header}>Example Demo</Text>
          <TouchableOpacity onPress={() => this.navigateTo('Playlist')}>
            <Text>Playlist Example</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.playMusicSample}>
            <Text>Play Example</Text>
          </TouchableOpacity>
          <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: 'grey',
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
