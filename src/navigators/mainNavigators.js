import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SettingScreen from '../components/Spotify/settingScreen';
// self import
import TabNavigator from './rootNavigator';
import PlaylistScreen from '../components/Spotify/songTabs/PlaylistScreen';

const AppNavigator = createStackNavigator(
    
    {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions:{
          header: null
      }
    },
    SettingScreen: {
      screen: SettingScreen,
    },
    Playlist: {
      screen: PlaylistScreen
    }
  });
  
  export default createAppContainer(AppNavigator);
