import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const browseAllData = [
    {color: '#f44336', title: 'Bollywood'},
    {color: '#f06292', title: 'Romance'},
    {color: '#9c27b0', title: 'Punjabi'},
    {color: '#fbc02d', title: 'Tamil'},
    {color: '#69f0ae', title: 'Telugu'},
    {color: '#b388ff', title: 'Wellness'},
    {color: '#ba68c8', title: 'R&B'},
    {color: '#42a5f5', title: 'Mood'},
]

const yourTopGenersData = [
    {color: '#b2dfdb', title: 'Pop'},
    {color: '#80deea', title: 'Electronics/ Dance'},
    {color: '#ff9800', title: 'Hip-Hop'},
]

export default class SearchSectionList extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
