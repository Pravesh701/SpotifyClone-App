import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default class SuggestedSongList extends Component {
  renderItemRecentPlayed = rowData => {
    const {item, index} = rowData;
    return (
      <TouchableOpacity style={styles.conatiner}>
        <Image source={item.image} style={styles.renderImageStyle} />
        <Text style={styles.renderListTextStyle}>{item.title}</Text>
        <Text>{item.artist}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.recentPlayedTextColor}>{this.props.homeTitle}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator = {false}
          data={this.props.listItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItemRecentPlayed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
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
