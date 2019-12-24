import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import constants, {vh, vw, DesignHeight, DesignWidth} from '../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

const playListData = [
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Create playlist',
    createdBy: '',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Liked Songs',
    createdBy: 'by Pravesh Singh',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Workout',
    createdBy: 'by Spotify',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Bollywodd 2.0',
    createdBy: 'by Spotify',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'I-POP',
    createdBy: 'by Spotify',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Punjabi Track',
    createdBy: 'by Spotify',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'English Songs',
    createdBy: 'by Spotify',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Puppy Songs',
    createdBy: 'by Spotify',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Yo Yo Honey Singh',
    createdBy: 'by Spotify',
  },
];

export default class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'search here',
    };
  }

  updateSearch = val => {
    //Alert.alert('Waoo!');
    this.setState({search: val});
  };

  renderPLayListItem = rowData => {
    return (
      <TouchableOpacity style={styles.flatListContainerStyle}>
        <View style={styles.flatListImageConatinerSyle}>
          <Image source={rowData.item.image} style={styles.flatListImageSyle} />
        </View>
        <View style={styles.flatListTextConatinerStyle}>
          <Text style={styles.flatListPlayListTitleStyle}>
            {rowData.item.title}
          </Text>
          <Text style={styles.createdByTextStyle}>
            {rowData.item.createdBy}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {search} = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.searchContainerStyle}>
          <SearchBar
            placeholder="find in playlist"
            placeholderTextColor="#000"
            onChangeText={this.updateSearch}
            value={search}
            inputContainerStyle={styles.searchBoxStyle}
            containerStyle={styles.searchBoxContainerStyle}
          />
          <View style={styles.filterTextContainerStyle}>
            <Text style={styles.filtertextStyle}>Filters</Text>
          </View>
        </View>
        <FlatList
          data={playListData}
          keyExtractor={(item, index) => item + index}
          renderItem={this.renderPLayListItem}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {marginTop: 8},
  searchBoxStyle: {
    backgroundColor: 'rgb(35, 40, 35)',
    width: vw((DesignWidth * 62) / 100),
    height: vh(25),
    borderRadius: vh(10),
  },
  searchBoxContainerStyle: {
    borderRadius: vh(10),
    backgroundColor: 'rgb(35, 40, 35)',
    height: vh(50),
    width: vw((DesignWidth * 65) / 100),
  },
  searchContainerStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterTextContainerStyle: {
    width: vw(65),
    height: vh(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(35, 40, 35)',
    borderRadius: vh(10),
  },
  filtertextStyle: {
    color: 'rgb(162, 169, 163)',
  },
  flatListImageConatinerSyle: {
    width: vw(70),
    height: vh(70),
    backgroundColor: 'rgb(162, 169, 163)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListImageSyle: {
    width: vw(20),
    height: vh(20),
  },
  flatListContainerStyle: {
    flexDirection: 'row',
    width: vw(DesignWidth),
    height: vh(80),
    marginStart: vw(18),
    marginEnd: vw(18),
    marginTop: vh(8),
  },
  flatListPlayListTitleStyle: {
    fontSize: vw(18),
    color: 'rgb(251, 252, 252)',
    fontWeight: 'bold',
  },
  createdByTextStyle: {
    color: 'rgb(162, 169, 163)',
  },
  flatListTextConatinerStyle: {
    marginStart: vw(10),
    justifyContent: 'center',
    height: vh(70),
    alignItems: 'center',
  },
});
