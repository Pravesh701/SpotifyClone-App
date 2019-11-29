import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native';
import {color} from '../../styles/sptifyStyle/color';

export default class SplashSpotify extends Component {
    render() {
        return (
            <ImageBackground style = {styles.container}>
              <Image 
                  source = {require('../../images/spotifyImages/logoImages/logo_big.png')}
                  style = {styles.logoImageStyle}
              />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#111',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoImageStyle:{
        
        //resizeMode: 'center'
    }
})
