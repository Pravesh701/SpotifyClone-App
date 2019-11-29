import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const imagePath = {
  closer: require('../../../images/spotifyImages/mainImages/v600_artworks-000038630805-yjfp0y-large-e1360775311335.jpeg'),
  script: require('../../../images/spotifyImages/mainImages/script.png'),
  SchwarzWeiss: require('../../../images/spotifyImages/mainImages/SchwarzWeiss_-_Cover.jpg'),
  yuna: require('../../../images/spotifyImages/mainImages/images.jpg'),
  theBlackArrow: require('../../../images/spotifyImages/mainImages/The-Black-Arrow-In-Bloom-Large_thumb.jpg'),
};

export default class RecentlyPlayed extends Component {
  state = {
    listItem: [
      {title: 'All Out 10s', image: imagePath.closer},
      {title: 'Global To 50', image: imagePath.SchwarzWeiss},
      {title: 'Cardio', image: imagePath.script},
      {title: 'workout', image: imagePath.theBlackArrow},
      {title: 'Today,s Top Hits', image: imagePath.yuna},
    ],
  };

  renderItemRecentPlayed = rowData => {
    const {item, index} = rowData;
    return (
      <TouchableOpacity style={styles.conatiner}>
        <Image source={item.image} style={styles.renderImageStyle} />
        <Text style={styles.renderListTextStyle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.recentPlayedTextColor}>Recently played</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator = {false}
          data={this.state.listItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItemRecentPlayed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
  },
  conatiner: {
    flex: 1,
    width: '100%',
    marginRight: 20,
    marginTop: 20,
  },
  renderImageStyle: {
    width: 140,
    height: 140,
  },
  recentPlayedTextColor: {
    fontSize: 30,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    marginLeft: 20,
  },
  renderListTextStyle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 18,
    color: '#fff',
  },
});
