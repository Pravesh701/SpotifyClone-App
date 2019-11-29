import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import CheckBox from '../../components/CheckBox/index';

export default class FlatListItemMobX extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
      isChecked: false,
      itemIndex: null,
      termsAccepted: false,
    };
  }

  handleCheckBox = () =>
    this.setState({termsAccepted: !this.state.termsAccepted});

  render() {
    return (
      <View style={styles.flatListViewStyle}>
        <View style={styles.flatListImageContainerStyle}>
          <Image
            style={styles.flatListImageStyle}
            source={{uri: this.props.imageUrl}}
          />
          {/* {console.warn("ID", rowData.item.id)} */}
          <Text style={styles.flatListTextStyle}>
            {this.props.rowData}
          </Text>
        </View>
        <View style={styles.fLCheckBoxConatiner}>
          <CheckBox
            selected={this.state.termsAccepted}
            onPress={this.handleCheckBox}
            text={'Accept terms and conditions'}
          />
          <TouchableOpacity
            onPress={() =>
              this.props.deleteButtonCalled(this.props.rowData.index)
            }
            style={styles.flatListDeleteBtnStyle}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
        <Text>{this.props.text}</Text>
      </View>
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
