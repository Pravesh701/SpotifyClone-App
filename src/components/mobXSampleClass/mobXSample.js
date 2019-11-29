import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
//import { CheckBox } from 'react-native-elements';
//import CheckBox from 'react-native-check-box';
//import styles from '../../styles/MobXStyle/style'
import CheckBox from '../../components/CheckBox/index';

import MobXDemo from '../../store/mobXDemo';
import {observer} from 'mobx-react';
import {TEAL} from 'react-native-material-color';
import {string} from '../../constants/string';
import FlatListItemMobX from './flatListItemMobX';
import backGroundImage from '../../images/checkBox/backgroundMobx.jpg';

@observer
export default class MobXSample extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
      termsAccepted: false,
      indexArray: [],
      index: null,
    };
  }

  handleCheckBox = index => {
    // console.warn(this.state.indexArray.indexOf(index))
    let val = this.state.indexArray;
    val = [...val, index];
    this.setState({
      indexArray: val,
      termsAccepted: !this.state.termsAccepted,
      index: index,
    });
  };

  componentDidMount() {
    MobXDemo.prototype.callAxios(1, 6);
  }
  onEndReachedCalled() {
    MobXDemo.prototype.callAxios(2, 7);
  }

  deleteButtonCalled(id) {
    MobXDemo.prototype.deleteDataOnList(id);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backGroundImage}
          style={styles.imageBackgroungContainer}>
          <View style={styles.headerStyle}>
            <Text style={styles.headerTitleStyle}>
              {/* {string.title} */}
              {MobXDemo.prototype.title}
            </Text>
          </View>
          <View style={styles.bodyViewStyle}>
            <FlatList
              data={MobXDemo.prototype.apiDataList}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={() => this.onEndReachedCalled()}
              renderItem={rowData => {
                return (
                  <View style={styles.flatListViewStyle}>
                    <View style={styles.flatListImageContainerStyle}>
                      <Image
                        style={styles.flatListImageStyle}
                        source={{uri: rowData.item.avatar}}
                      />
                      {/* {console.warn("ID", rowData.item.id)} */}
                      <View style={styles.nameContainerStyle}>
                        <Text style={styles.flatListTextStyle}>
                          {rowData.item.first_name}
                        </Text>
                        <Text style={styles.flatListTextStyle}>
                          {rowData.item.email}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.fLCheckBoxConatiner}>
                      {/* <CheckBox
                      style={styles.flatListCheckBoxStyle}
                      onClick={() => {
                        this.setState({
                          isChecked: !this.state.isChecked,
                          itemIndex: rowData.index
                        });
                      }}
                      isChecked={this.state.isChecked && rowData==this.state.itemIndex}
                      // leftText={'CheckBox'}
                    /> */}

                      <CheckBox
                        selected={this.state.termsAccepted}
                        onPress={this.handleCheckBox.bind(this, rowData.index)}
                        text={'Accept terms and conditions'}
                        indexArray={this.state.indexArray}
                        currentIndex={rowData.index}
                        index={this.state.index}
                      />
                      <TouchableOpacity
                        onPress={() => this.deleteButtonCalled(rowData.index)}
                        style={styles.flatListDeleteBtnStyle}>
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              initialNumToRender={2}
              maxToRenderPerBatch={1}
              onEndReachedThreshold={0.2}
              pagingEnabled={true}
            />
          </View>

          {/* <View style={styles.addToDoListContainerStyle}>
          <TextInput
            onChangeText={val =>
              this.setState({
                value: val,
              })
            }
            placeholder="type todo name here..."
            placeholderTextColor={'black'}
            style={styles.addToDoListTextInputStyle}
          />
          <TouchableOpacity
            onPress={() => MobXDemo.prototype.makeTodoList(this.state.value)}
            style={styles.addToDoListButtonStyle}>
            <Text>Click Me</Text>
          </TouchableOpacity>
        </View> */}
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageBackgroungContainer: {
    width: '100%',
    height: '100%',
  },
  headerStyle: {
    width: '100%',
    height: 56,
    backgroundColor: '#00bfa5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleStyle: {
    fontSize: 20,
    fontFamily: 'CircularStd-Bold',
  },

  bodyViewStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToDoListContainerStyle: {
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    paddingLeft: 1,
    paddingRight: 1,
  },
  addToDoListTextInputStyle: {
    backgroundColor: '#ffcdd2',
    width: '80%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
  },
  addToDoListButtonStyle: {
    width: '20%',
    height: 60,
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  flatListViewStyle: {
    backgroundColor: '#1de9b6',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 370,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },

  flatListTextStyle: {
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
  },
  flatListImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 62.5,
  },
  flatListImageContainerStyle: {
    flexDirection: 'row',
    flex: 0.8,
  },
  flatListDeleteBtnStyle: {
    width: 70,
    height: 30,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  flatListCheckBoxStyle: {
    height: 30,
    flex: 1,
  },
  fLCheckBoxConatiner: {
    flex: 0.2,
    alignItems: 'flex-end',
    borderColor: 'green',
  },
  nameContainerStyle: {
    justifyContent: 'center',
    marginLeft: 8,
  },
});

{
  /* <View style={styles.nameContainerStyle}>
//       <Text style={styles.flatListTextStyle}>
//         {rowData.item.first_name}
//       </Text>
//       <Text style={styles.flatListTextStyle}>
//         {rowData.item.email}
//       </Text>
//     </View> */
}
