import React, {Component} from 'react';
import constants, {vh, vw, DesignHeight, DesignWidth} from '../../constants';

import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  Animated,
  FlatList,
  TouchableOpacity,
  SectionList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

const browseAllData = [
  {color: '#f44336', title: 'Bollywood'},
  {color: '#f06292', title: 'Romance'},
  {color: '#9c27b0', title: 'Punjabi'},
  {color: '#fbc02d', title: 'Tamil'},
  {color: '#69f0ae', title: 'Telugu'},
  {color: '#b388ff', title: 'Wellness'},
  {color: '#ba68c8', title: 'R&B'},
  {color: '#42a5f5', title: 'Mood'},
  {color: '#f44336', title: 'Bollywood'},
  {color: '#f06292', title: 'Romance'},
  {color: '#9c27b0', title: 'Punjabi'},
  {color: '#fbc02d', title: 'Tamil'},
  {color: '#69f0ae', title: 'Telugu'},
  {color: '#b388ff', title: 'Wellness'},
  {color: '#ba68c8', title: 'R&B'},
  {color: '#42a5f5', title: 'Mood'},
];

const yourTopGenersData = [
  {color: '#b2dfdb', title: 'Pop'},
  {color: '#80deea', title: 'Electronics/ Dance'},
  {color: '#ff9800', title: 'Hip-Hop'},
];

const Data = [
  {
    headerTitle: 'Your Top Geners Data',
    data: [yourTopGenersData],
  },
  {
    headerTitle: 'Browse all',
    data: [browseAllData],
  },
];

HEADER_MAX_MARGIN_TOP = 100;
HEADER_MIN_MARGIN_TOP = 0;
HEADER_MARGIN_TOP = 100;

export default class Search extends Component {
  state = {
    searchInput: '',
    search: '',
    scrollY: new Animated.Value(0),
  };

  Data = [
    {
      headerTitle: 'Your Top Geners Data',
      myArray: yourTopGenersData,
    },
    {
      headerTitle: 'Browse all',
      myArray: browseAllData,
    },
  ];
  setStateData(val) {
    this.setState({
      searchInput: val,
    });
  }

  updateSearch = search => {
    this.setState({search});
  };
  renderItemFlatList = rowData => {
    return (
      <TouchableOpacity
        style={[styles.renderItemStyle, {backgroundColor: rowData.item.color}]}>
        <Text style={styles.flatListTextStyle}>{rowData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {search} = this.state;
    const headerMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_MARGIN_TOP - HEADER_MIN_MARGIN_TOP],
      outputRange: [HEADER_MAX_MARGIN_TOP, HEADER_MIN_MARGIN_TOP],
      extrapolate: 'clamp',
    });
    return (
      <LinearGradient style={styles.container} colors={['#666', '#000000']}>
        <SafeAreaView style={styles.safeAreaViewStyle}>
          <Animated.View style={styles.searchViewStyle}>
            <Text style={styles.searchTextStyle}>Search</Text>
          </Animated.View>

          <View style={styles.mainSearchContainerStyle}>
            <Animated.View
              style={[
                styles.searchViewAnimatedStyle,
                {marginTop: headerMarginTop},
              ]}>
              <SearchBar
                placeholder="Artis, songs, or podcats"
                placeholderTextColor="#000"
                onChangeText={this.updateSearch}
                value={search}
                inputContainerStyle={styles.searchBoxStyle}
                containerStyle={styles.searchBoxContainerStyle}
              />
            </Animated.View>

            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event([
                {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
              ])}>
              <SectionList
                sections={Data}
                keyExtractor={(item, index) => item + index}
                renderItem={({item, index, section}) => {
                  return (
                    <FlatList
                      data={item}
                      numColumns={2}
                      renderItem={this.renderItemFlatList}
                      keyExtractor={(item, index) => item + index}
                      contentContainerStyle={styles.flatListContainerStyle}
                    />
                  );
                }}
                renderSectionHeader={({section: {headerTitle}}) => (
                  <Text style={styles.genersTextStyle}>{headerTitle}</Text>
                )}
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchViewStyle: {
    width: vw(DesignWidth),
    height: vh(100),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  searchViewAnimatedStyle: {
    marginTop: HEADER_MARGIN_TOP,
  },
  searchTextStyle: {
    fontSize: vh(32),
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    marginTop: vh(30),
  },
  searchBoxContainerStyle: {
    borderRadius: vh(10),
    backgroundColor: '#fff',
  },
  searchBoxStyle: {
    backgroundColor: '#fff',
    width: vw((DesignWidth * 77) / 100),
    height: vh(35),
    borderRadius: vh(10),
  },
  safeAreaViewStyle: {
    alignItems: 'center',
    width: vw(DesignWidth),
    height: vh(DesignHeight),
  },
  searchImageStyle: {
    width: vw(30),
    height: vh(30),
  },
  mainSearchContainerStyle: {
    width: vw((DesignWidth * 80) / 100),
    flex: 1,
  },
  renderItemStyle: {
    height: vh(80),
    width: vw(140),
    backgroundColor: 'blue',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 20,
    borderRadius: vw(10),
  },
  flatListContainerStyle: {},
  flatListTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  genersTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: vh(20),
  },
});
