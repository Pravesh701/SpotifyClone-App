import React, {Component} from 'react';
import {Text, StyleSheet, View, Animated, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialAnimated: new Animated.Value(100),
      initialAnimatedLeftRight: new Animated.Value(200),
      isExpandTopBottom: true,
      isExpandLeftRight: true,
      checkLeftRight: true,
    };
  }

  initialExpandView =()=> {
    if(this.state.checkLeftRight){
      this.expandViewLeftRight()
    }
    else
    {
      this.expandViewTopBottom()
    }
  }

  expandViewTopBottom () {
    Animated.timing(this.state.initialAnimated, {
      toValue: this.state.isExpandTopBottom ? 400 : 100,
      duration: 1000,
    }).start(()=>{
      this.initialExpandView();
    });
    this.setState({
      isExpandTopBottom: !this.state.isExpandTopBottom,
      checkLeftRight: !this.state.checkLeftRight
    })
  };
  expandViewLeftRight () {
    Animated.timing(this.state.initialAnimatedLeftRight, {
      toValue: this.state.isExpandLeftRight ? 300 : 100,
      duration: 1000,
    }).start(()=>{
      this.initialExpandView();
    });
    this.setState({
      isExpandLeftRight: !this.state.isExpandLeftRight,
      checkLeftRight: !this.state.checkLeftRight,
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.viewStyle, {height: this.state.initialAnimated, width:this.state.initialAnimatedLeftRight}]}>
          <Text> textInComponent </Text>
        </Animated.View>

        <TouchableOpacity
          style={{
            width: 120,
            height: 50,
            backgroundColor: 'blue',
            borderRadius: 62.5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
          onPress={this.initialExpandView}>
          <Text>Expand View</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
