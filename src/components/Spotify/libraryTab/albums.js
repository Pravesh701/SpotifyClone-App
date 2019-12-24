import React, {Component} from 'react';  
import {View,Text, StyleSheet} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import constants, {vh, vw, DesignHeight, DesignWidth} from '../../../constants';

export default class Albums extends Component{  
    render() {  
        return(  
            <View style = {styles.container}>   
                <Text style = {styles.textStyle}>Your albums will apear here</Text>  
            </View>  
        )  
    }  
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: vw(18),
        color: 'rgb(251, 252, 252)',
    }
})