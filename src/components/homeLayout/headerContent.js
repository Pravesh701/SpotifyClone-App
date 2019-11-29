import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {styles} from '../../styles/mainContainerStyle/commonStyle';
import personImage from '../../images/homeImages/tab1.png'
import cloudImage from '../../images/homeImages/cloud1.png'

export default HeaderContent = props => {
  return (
    <View style={styles.headerConatinerStyle}>
      <View style={localStyle.rowContainer}>
        <Image  
            source = {personImage}
            style = {styles.imageStyle}
        />
        <View style = {styles.nameContainerStyle}> 
          <Text style = {styles.headerTitleStyle}>Marcus Hoang</Text>
          <Text style = {styles.mediumTextStyle}>Level 3</Text>
        </View>
      </View>
      {/* <Image 
        source ={cloudImage}
        style = {localStyle.cloudStyle}
      /> */}
    </View>
  );
};

const localStyle = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    paddingLeft: 30,
    alignItems:'center',
  },
  nameContainerStyle:{
  
  },
  cloudStyle:{
    width:50,
    height:50
  }
})

