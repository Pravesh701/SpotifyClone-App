import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import constants, {
  vh,
  vw,
  DesignHeight,
  DesignWidth,
} from '../../constants/index';
import API from './api';

//self import
import Settings from './components/settings';
import RecentlyPlayed from './components/recentlyPlayed';
import SuggestedSongList from './components/suggestedSongList';
import SectionListForAll from './components/sectionListForAll';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const imagePath = {
  arian1: require('../../images/spotifyImages/artists/ariana1.png'),
  justin1: require('../../images/spotifyImages/artists/justin1.png'),
  taylorShift: require('../../images/spotifyImages/artists/kisspng-taylor-swift-reputation-music-grammy-awards-5cc01e7a78f9d1.4596861815560945864955.png'),
  marshmello1: require('../../images/spotifyImages/artists/Marshmello-Fortnite-Free-PNG-Image.png'),
  edSheeran: require('../../images/spotifyImages/artists/kisspng-millerntor-stadion-fc-st-pauli-talco-awaydays-5b0339e54cbc67.3554077515269380853143.png'),
  camelaCabella1: require('../../images/spotifyImages/artists/Camila-Cabello-PNG-Image.png'),

  arian2: require('../../images/spotifyImages/artists/ariana2.png'),
  arian3: require('../../images/spotifyImages/artists/ariana3.png'),
  arian4: require('../../images/spotifyImages/artists/ariana5.png'),
  justin2: require('../../images/spotifyImages/artists/justin2.png'),
  justin3: require('../../images/spotifyImages/artists/justin3.png'),
  marshmello2: require('../../images/spotifyImages/artists/Marshmello-Fortnite-PNG-Download-Image.png'),
  marshmello3: require('../../images/spotifyImages/artists/Marshmello-Fortnite-PNG-Free-Download.png'),
  camelaCabella2: require('../../images/spotifyImages/artists/camila1.png'),

  closer: require('../../images/spotifyImages/mainImages/v600_artworks-000038630805-yjfp0y-large-e1360775311335.jpeg'),
  script: require('../../images/spotifyImages/mainImages/script.png'),
  SchwarzWeiss: require('../../images/spotifyImages/mainImages/SchwarzWeiss_-_Cover.jpg'),
  yuna: require('../../images/spotifyImages/mainImages/images.jpg'),
  theBlackArrow: require('../../images/spotifyImages/mainImages/The-Black-Arrow-In-Bloom-Large_thumb.jpg'),
};

const listItem = [
  {
    title: 'All Out 10s',
    image: imagePath.camelaCabella1,
    artist: 'Camila Cabela',
  },
  {title: 'Global To 50', image: imagePath.justin1, artist: 'Justin Bieber'},
  {title: 'Cardio', image: imagePath.taylorShift, artist: 'Taylor Shift'},
  {title: 'workout', image: imagePath.arian1, artist: 'Ariana Grande'},
  {title: 'Today,s Top Hits', image: imagePath.edSheeran, artist: 'Ed Sheeran'},

  {title: 'All Out 10s', image: imagePath.closer, artist: 'Camila Cabela'},
  {
    title: 'Global To 50',
    image: imagePath.SchwarzWeiss,
    artist: 'Camila Cabela',
  },
  {title: 'Cardio', image: imagePath.script, artist: 'Camila Cabela'},
  {title: 'workout', image: imagePath.theBlackArrow, artist: 'Camila Cabela'},
  {title: 'Today,s Top Hits', image: imagePath.yuna, artist: 'Camila Cabela'},

  {title: 'Hits', image: imagePath.camelaCabella2, artist: 'Camila Cabela'},
  {title: 'Hits', image: imagePath.justin2, artist: 'Justin Bieber'},
  {title: 'Hits', image: imagePath.justin3, artist: 'Justin Bieber'},
  {title: 'Hits', image: imagePath.arian2, artist: 'Ariana Grande'},
  {title: 'Hits', image: imagePath.arian3, artist: 'Ed Sheeran'},

  {title: 'Hits', image: imagePath.camelaCabella2, artist: 'Camila Cabela'},
  {title: 'Hits', image: imagePath.arian4, artist: 'Ariana'},
  {title: 'Hits', image: imagePath.justin3, artist: 'Justin Bieber'},
  {title: 'Hits', image: imagePath.arian4, artist: 'Ariana Grande'},
  {title: 'Hits', image: imagePath.arian3, artist: 'Ed Sheeran'},
];

const recent = [
  {title: 'All Out 10s', image: imagePath.closer, artist: ''},
  {title: 'Global To 50', image: imagePath.SchwarzWeiss, artist: ''},
  {title: 'Cardio', image: imagePath.script, artist: ''},
  {title: 'workout', image: imagePath.theBlackArrow, artist: ''},
  {title: 'Today,s Top Hits', image: imagePath.yuna, artist: ''},
];

const DATA = [
  {
    trackHeading: 'Recently played',
    data: [recent],
  },
  {
    trackHeading: 'Your heavy rotation',
    data: [listItem],
  },

  {
    trackHeading: 'Made for you',
    data: [listItem],
  },
  {
    trackHeading: 'Recent listening',
    data: [listItem],
  },
  {
    trackHeading: 'Workout',
    data: [listItem],
  },
  {
    trackHeading: 'Mood',
    data: [listItem],
  },
  {
    trackHeading: 'Happy',
    data: [listItem],
  },
  {
    trackHeading: 'Sing-along',
    data: [listItem],
  },
  {
    trackHeading: 'Recommended radio',
    data: [listItem],
  },
  {
    trackHeading: 'Popular and tending',
    data: [listItem],
  },
  {
    trackHeading: 'Chill',
    data: [listItem],
  },
  {
    trackHeading: 'Popular playlists',
    data: [listItem],
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getTopTracks: null,
    };
  }

  componentDidMount = () => {
    this.fetchTopTracks();
  };
  fetchTopTracks() {
    const apiKey = '17fde79d7b9eb93639c791a93517569f';
    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`;

    //API.get('',{params: {method: 'chart.gettoptracks', api_key: apiKey,format:'json'}})
    API.get(url)
      .then(response => {
        console.log('API Response ', response.data.tracks.track);
        this.setState({
          getTopTracks: response.data.tracks,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onPressSettings = () => {
    //Alert.alert('Welcome in Settings');
    this.props.navigation.navigate('SettingScreen');
  };

  renderMainFlatListItem = rowData => {
    const {item, index} = rowData;
    return (
      <View>
        <SuggestedSongList listItem={this.state.listItem} homeTitle={item} />
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView contentContainerStyle={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#8B80AB', '#2A2A36', '#141416']}
          style={styles.container}>
          <Settings onPressSettings={this.onPressSettings} />
          <SectionListForAll data={DATA} apiData={this.state.getTopTracks} />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
  },
});
