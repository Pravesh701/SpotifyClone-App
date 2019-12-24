import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SectionList,
  FlatList,
} from 'react-native';
import constants, {
  vh,
  vw,
  DesignHeight,
  DesignWidth,
} from '../../../constants/index';

export default class SectionListForAll extends Component {
  componentDidMount() {}

  clickSectionListItems = () => {
    console.warn('API DATA ', this.props.apiData);
  };

  renderItemRecentPlayed = rowData => {
    const {item, index} = rowData;
    return (
      <TouchableOpacity
        onPress={this.clickSectionListItems}
        style={styles.conatiner}>
        <Image
          resizeMode={'center'}
          source={item.image}
          style={styles.renderImageStyle}
        />
        <Text style={styles.renderListTextStyle}>{item.title}</Text>
        <Text>{item.artist}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <SectionList
          sections={this.props.data}
          stickySectionHeadersEnabled={false}
          renderItem={({item, index, section}) => {
            return (
              <FlatList
                data={item}
                horizontal={true}
                renderItem={this.renderItemRecentPlayed}
                keyExtractor={(item, index) => item + index}
              />
            );
          }}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({section: {trackHeading}}) => (
            <Text style={styles.recentPlayedTextColor}>{trackHeading}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vh(40),
  },
  conatiner: {
    flex: 1,
    width: vw(100),
    marginStart: vw(20),
    marginTop: vh(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderImageStyle: {
    width: vw(140),
    height: vh(140),
  },
  recentPlayedTextColor: {
    fontSize: vw(30),
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    marginLeft: vw(20),
  },
  renderListTextStyle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: vw(18),
    color: '#fff',
  },
});
