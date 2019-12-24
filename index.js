import {AppRegistry} from 'react-native';
import App from './App';
//import App from './src/components/Test/TestSample';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
//import GoogleMap from './src/components/googleMaps/googleMap'
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() =>
  require('./src/components/Spotify/service'),
);
