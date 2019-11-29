import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Settings = (props) => {
    return (
        <TouchableOpacity
           style = {styles.container}
         onPress = {props.onPressSettings}
        >
           <Ionicons name='ios-settings' size={40} color='#fff'/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        right:0,
        position:'absolute',
        marginRight:50,
    }
})

export default Settings

