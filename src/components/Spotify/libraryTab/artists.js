import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import constants, {vh, vw, DesignHeight, DesignWidth} from '../../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

const playListData = [
  {
    image: require('../../../images/spotifyImages/artists/ariana2.png'),
    title: 'Ariana',
  },
  {
    image: require('../../../images/spotifyImages/artists/ariana3.png'),
    title: 'Ariana Grande',
  },
  {
    image: require('../../../images/spotifyImages/artists/ariana5.png'),
    title: 'Camila Cabela',
  },
  {
    image: require('../../../images/spotifyImages/artists/ariana2.png'),
    title: 'Ariana Grande',
  },
  {
    image: require('../../../images/spotifyImages/artists/ariana2.png'),
    title: 'Ariana Grande',
  },
  {
    image: require('../../../images/spotifyImages/logoImages/ic_plus.png'),
    title: 'Ariana Grande',
  },
  {
    image: require('../../../images/spotifyImages/artists/ariana2.png'),
    title: 'Ariana Grande',
  },
  {
    image: require('../../../images/spotifyImages/artists/ariana2.png'),
    title: 'Ariana Grande',
  },
  {
    image: require('../../../images/spotifyImages/artists/ariana2.png'),
    title: 'Ariana Grande',
  },
];

export default class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'search here',
    };
  }

  updateSearch = () => {
    Alert.alert('Waoo!');
  };

  renderPLayListItem = rowData => {
    return (
      <TouchableOpacity style = {styles.flatListContainerStyle}>
        <View style = {styles.flatListImageConatinerSyle}>
          <Image source={rowData.item.image} style={styles.flatListImageSyle} />
        </View>
        <View style = {styles.flatListTextConatinerStyle}>
          <Text style=  {styles.flatListPlayListTitleStyle}>{rowData.item.title}</Text>
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
            placeholder="Artis, songs, or podcats"
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
  container: {},
  searchBoxStyle: {
    backgroundColor: 'rgb(35, 40, 35)',
    width: vw((DesignWidth * 60) / 100),
    height: vh(25),
    borderRadius: vh(10),
  },
  searchBoxContainerStyle: {
    borderRadius: vh(10),
    backgroundColor: 'rgb(35, 40, 35)',
    height: vh(40),
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
    borderRadius: vw(62.5)
  },
  flatListImageSyle: {
    flex: 1,
    width: null,
    height: null,
  },
  flatListContainerStyle: {
      flexDirection: 'row',
      width: vw(DesignWidth),
      height: vh(80),
      marginStart: vw(18),
      marginEnd: vw(18),
  },
  flatListPlayListTitleStyle: {
      fontSize: vw(18),
      color: 'rgb(251, 252, 252)',
      fontWeight: 'bold',
  },
  createdByTextStyle: {
    color: 'rgb(162, 169, 163)'
  },
  flatListTextConatinerStyle: {
      marginStart: vw(10),
      justifyContent: 'center',
      height: vh(70),
      alignItems: 'center'
  }
});
