import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// custom import files
import {styles} from '../../styles/asyncToDoListStyle/style';
import CheckBox from '../../components/CheckBox/asyncToDoCheckbox/index';
import BackGroundImage from '../../images/checkBox/backgroundMobx.jpg';

/**
 * header function
 */
function Header({title, onPressDeleteAll}) {
  return (
    <View style={styles.headerConatinerStyle}>
      <View style={localStyle.headeTitleContainerSTyle}>
        <Text style={styles.headerTitleStyle}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={onPressDeleteAll}
        style={localStyle.headerDLButtonStyle}>
        <Text>deleteAll</Text>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Main class for Show Data AsyncStorage and State management Task
 */
export default class MainToDoClass extends Component {
  state = {
    val: '',
    data: [],
  };

  componentDidMount() {
    try {
      AsyncStorage.getItem('key', (err, val) => {
        let data = JSON.parse(val);
        this.setState({
          data: data,
        });
      });
    } catch (error) {
      Alert.alert('Error', error);
    }
  }

  /**
   * Delete all data from state and AsyncStorage
   */
  onPressDeleteAll = data => {
    this.setState(
      {
        data: [],
      },
      () => {
        try {
          AsyncStorage.clear();
        } catch (error) {
          Alert.alert('Error', error);
        }
      },
    );
  };



  /**
   *  called when type anything in Bottom InputText
   */
  onChangeTextCalled = val => {
    this.setState({
      val: val,
    });
  };

  /**
   * method called when click me or onSubmitEditing Button called and added todo list
   */
  setStateFunction = () => {
    let payload = {
        id: Math.random(),
        isCompleted: false,
        value: this.state.val,
      },
      myData = this.state.data;
    myData.push(payload);
    this.setState({data: myData, val: ''}, () =>
      AsyncStorage.setItem('key', JSON.stringify(myData)),
    );
  };

    /**
   * Delete single data from Flatlist with state and AsyncStorage
   */
  deleteButtonCalled(id) {
    AsyncStorage.getItem('key', (err, value) => {
      let myData = JSON.parse(value);
      let index = myData.findIndex(a => a.id === id);
      myData.splice(index, 1);
      this.setState(
        {
          data: myData,
        },
        () => {
          try {
            AsyncStorage.setItem('key', JSON.stringify(myData));
          } catch (e) {
            Alert.alert('Exception');
          }
        },
      );
    });
  }

  /**
   * CheckBox toggle from list
   * @param {*} index
   * @param {*} isCompleted
   */

  onpressCheckBox(index, isCompleted) {
    let myData = this.state.data;
    myData[index].isCompleted = !isCompleted;
    this.setState({
      data: myData,
    });
  }

   /**
   * flatList Items
   */

  renderItemData = rowData => {
    let {item} = rowData;
    return (
      <View style={localStyle.flatListContentViewStyle}>
        <View style={localStyle.nameContainerStyle}>
          <Text style={localStyle.flatListTextStyle}>{item.id}</Text>
          <Text style={localStyle.flatListTextStyle}>{item.value}</Text>
        </View>
        <View style={localStyle.fLCheckBoxConatiner}>
          <CheckBox
            text={'Accept terms and conditions'}
            onpressCheckBox={() =>
              this.onpressCheckBox(rowData.index, item.isCompleted)
            }
            isCompleted={item.isCompleted}
            currentIndex={item.id}
          />

          <TouchableOpacity
            onPress={() => this.deleteButtonCalled(item.id)}
            style={localStyle.flatListDeleteBtnStyle}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground source={BackGroundImage} style={styles.container}>
        <Header
          onPressDeleteAll={this.onPressDeleteAll.bind(this, this.state.data)}
          title="Welcome"
        />

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={this.renderItemData}
          // contentContainerStyle = {localStyle.flatListMainContainerStyle}
        />

        <View style={localStyle.addToDoListContainerStyle}>
          <TextInput
            onChangeText={this.onChangeTextCalled}
            placeholder="type todo name here..."
            placeholderTextColor={'black'}
            style={localStyle.addToDoListTextInputStyle}
            onSubmitEditing={this.setStateFunction}
            value={this.state.val}
            returnKeyType={'done'}
          />
          <TouchableOpacity
            onPress={this.setStateFunction}
            style={localStyle.addToDoListButtonStyle}>
            <Text>Click Me</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const localStyle = StyleSheet.create({
  headeTitleContainerSTyle: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDLButtonStyle: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addToDoListContainerStyle: {
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    paddingLeft: 1,
    paddingRight: 1,
  },
  addToDoListTextInputStyle: {
    backgroundColor: '#b2dfdb',
    width: wp('80%'),
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
  },
  addToDoListButtonStyle: {
    width: wp('20%'),
    height: 60,
    backgroundColor: '#26a69a',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },

  flatListMainContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatListContentViewStyle: {
    flex: 1,
    backgroundColor: '#80cbc4',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: wp('100%'),
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  nameContainerStyle: {
    flex: 0.8,
    justifyContent: 'center',
  },
  flatListTextStyle: {
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
  },
  fLCheckBoxConatiner: {
    flex: 0.2,
    alignItems: 'flex-end',
    borderColor: 'green',
  },
  flatListTextStyle: {
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
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
});
