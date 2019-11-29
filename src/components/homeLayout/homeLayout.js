import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/mainContainerStyle/commonStyle';
import HeaderContent from './headerContent';
import Color from 'react-native-material-color';
import personImage from '../../images/homeImages/ic_girl.png';
import acceptImage from '../../images/homeImages/ic_accept.png'
import addMoreImage from '../../images/homeImages/ic-more.png'
import transferImage from '../../images/homeImages/ic-transfer.png'
import rightArrowImage from '../../images/homeImages/ic_arrow_right.png';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeLayout extends Component {
  render() {
    return (
        <ScrollView bounces={false} style={{backgroundColor:'#0D896C'}} contentContainerStyle={{flex:1}}>
      <SafeAreaView style={styles.container}>
        <HeaderContent />
        <View style={localStyle.container}>
          <View style={localStyle.healthContainerSTyle}>
            <Text style={localStyle.healthTextStyle}>Health Insurance</Text>
            <TouchableOpacity style={localStyle.cardContainerStyle}>
              <Text style={localStyle.cardDetailTitleStyle}>Card details</Text>
              <Image
                source={rightArrowImage}
                style={localStyle.rightArrowImageStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={localStyle.healthContainerSTyle}>
            <View>
              <Text style={localStyle.balanceTextStyle}>Balance</Text>
              <Text style={localStyle.balanceRupeeStyle}>2.000.000 VND</Text>
            </View>
            <View>
              <Text style={localStyle.balanceTextStyle}>Balance Used</Text>
              <Text style={localStyle.balanceRupeeStyle}>4.320.000 VND</Text>
            </View>
          </View>
          <Text style={localStyle.relativeTextStyle}> Relatives</Text>


          <View style={localStyle.relativeImageContainerStyle}>
            <View style = {localStyle.relativeContentConatinerStyle}>
              <Image source={personImage} style={localStyle.imageStyle} />
              <Image 
                  source = {acceptImage}
                  style = {[localStyle.imageStyle, {width:15, height:15, position:'absolute', marginTop:20}]}
              />
              <Text style = {localStyle.relativeContentTextStyle}>Wife</Text>
            </View>
            <View style = {localStyle.relativeContentConatinerStyle}>
              <Image source={personImage} style={localStyle.imageStyle} />
              <Image 
                  source = {acceptImage}
                  style = {[localStyle.imageStyle, {width:15, height:15, position:'absolute', marginTop:20}]}
              />
              <Text style = {localStyle.relativeContentTextStyle}>Child</Text>
            </View>
            <View style = {localStyle.relativeContentConatinerStyle}>
              <Image source={addMoreImage} style={localStyle.imageStyle} />
              <Text style = {localStyle.relativeContentTextStyle}>Add</Text>
            </View>
            <View style = {localStyle.relativeContentConatinerStyle}>
              <Image source={addMoreImage} style={localStyle.imageStyle} />
              <Text style = {localStyle.relativeContentTextStyle}>Add</Text>
            </View>
            <View style={localStyle.lineColor}></View>
            <View style = {localStyle.benefitsContainerStyle}>
              <Image source={transferImage} style={localStyle.imageStyle} />
              <Text style = {localStyle.relativeContentTextStyle}>Benefits Transfer</Text>
            </View>
          </View>
          <View style = {localStyle.healthContainerSTyle}>
              <Text style = {localStyle.relativeTextStyle}>History</Text>
              <Text style = {localStyle.seeAllTextStyle}>See All</Text>
          </View>
          <View style = {localStyle.historyContainerStyle}>
              <View>
                  <Text style = {localStyle.historyTextStyle}>Add Relative</Text>
                  <Text style = {localStyle.historyTextDateStyle}>13/06/2019</Text>
              </View>
              <Text style = {localStyle.vndTextStyle}>4.000.000 VND</Text>
          </View>
          <View style = {localStyle.historyContainerStyle}>
              <View>
                  <Text style = {localStyle.historyTextStyle}>Add Relative</Text>
                  <Text style = {localStyle.historyTextDateStyle}>13/06/2019</Text>
              </View>
              <Text style = {localStyle.vndTextStyle}>4.000.000 VND</Text>
          </View>
        </View>
        <View style = {localStyle.healthAndBeautyContainerStyle}>
            <Text style = {localStyle.healthAndBeatyTextColor}>Health and Beauty</Text>
            <Text style = {localStyle.healthAndBeatyVNDTextStyle}>5.000.000 VND</Text>
          </View>
          <View style = {localStyle.courseAndTrainingContainerStyle}>
            <Text style = {localStyle.courseAndTrainingTextStyle}>Course and Training</Text>
            <Text style = {localStyle.courseAndTrainingTextStyle}>2.000.000 VND</Text>
          </View>
          <View style = {localStyle.businessTripCostStyle}>
            <Text style = {localStyle.businessTripCostTextStyle}>Business trip cost </Text>
          </View>
      </SafeAreaView>
      </ScrollView>
    );
  }
}

const localStyle = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingTop: 10,
    paddingLeft:18,
    paddingRight:18,
    position:'absolute',
    marginTop:120,
    backgroundColor:'#FFF5F4',
    height:'100%',
    width:'100%',
  },
  healthTextStyle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 24,
  },
  healthContainerSTyle: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
  },
  rightArrowImageStyle: {
    width: 20,
    height: 20,
    color: '#fff',
  },
  cardDetailTitleStyle: {
    color: '#fff',
  },
  cardContainerStyle: {
    flexDirection: 'row',
    backgroundColor: Color.TEAL[500],
    paddingTop: 6,
    paddingLeft: 6,
    paddingBottom: 6,
    paddingRight: 6,
    borderRadius: 20,
  },
  balanceTextStyle: {
    fontSize: 18,
    color: Color.RED[200],
  },
  balanceRupeeStyle: {
    fontSize: 20,
    color: Color.TEAL[400],
    marginTop: 10,
  },
  relativeTextStyle: {
    fontSize: 18,
    color: Color.RED[200],
    marginTop: 20,
  },
  imageStyle: {
    width: 30,
    height: 30,
    backgroundColor:'#FEFEFE',
    borderRadius:62.5,
  },
  relativeImageContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
  },
  relativeContentConatinerStyle:{
      alignItems:'center',
  },
  lineColor: {
    width: 1,
    height: 50,
    backgroundColor: Color.GREY[600],
  },
  benefitsContainerStyle:{
      alignItems:'center'
  },
  relativeContentTextStyle:{
      marginTop:10
  },
  seeAllTextStyle:{
    backgroundColor: Color.GREY[6],
    marginTop:20,
    fontSize:16,
    textDecorationLine: 'underline',
  },
  historyContainerStyle:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:10,
  },
  historyTextStyle:{
      fontSize:16,
  },
  historyTextDateStyle:{
      color:Color.GREY[600],
  },
  vndTextStyle:{
      color: Color.RED[500],
  },
  healthAndBeautyContainerStyle:{
      flexDirection:'row', 
      justifyContent:'space-between',
      backgroundColor:'#FFCBD7',
      shadowOpacity:0.8,
      elevation:100,
      position:'absolute',
      bottom:0,
      width:'100%',
      paddingBottom:'55%',
      borderRadius:20,
      paddingTop:20,
      paddingLeft:10,
      paddingRight:10,
     
  },
  healthAndBeatyTextColor:{
      fontSize:20,
      fontFamily:'CircularStd-Bold',
      borderRadius:62.5,
  },
  healthAndBeatyVNDTextStyle:{
      fontSize:20
  },
  courseAndTrainingContainerStyle:{
    flexDirection:'row', 
    justifyContent:'space-between',
    backgroundColor:'#074251',
    shadowOpacity:0.8,
    elevation:100,
    position:'absolute',
    bottom:0,
    width:'100%',
    paddingBottom:'35%',
    borderRadius:20,
    paddingTop:20,
    paddingLeft:10,
    paddingRight:10,
  },
  courseAndTrainingTextStyle:{
    fontSize:20,
    color:"#fff",
    fontFamily:'CircularStd-Bold',
  },
  businessTripCostStyle:{
    flexDirection:'row', 
    justifyContent:'space-between',
    backgroundColor:'#F8DECF',
    shadowOpacity:0.8,
    elevation:100,
    position:'absolute',
    bottom:0,
    width:'100%',
    paddingBottom:'15%',
    paddingTop:20,
    paddingLeft:10,
    paddingRight:10,
    borderTopStartRadius:20,
    borderTopEndRadius:20,
  },
  businessTripCostTextStyle:{
    fontSize:20,
    fontFamily:'CircularStd-Bold',
  }
});
