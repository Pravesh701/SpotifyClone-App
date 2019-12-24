import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

export default class Card extends Component {
  constructor() {
    super();
    this.container = null;
  }
  render() {
    return (
      <View ref={container => (this.container = container)}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.container.measure((fx, fy, width, height, px, py) => {
              this.props.selectCard(px, py, this.props.id);
            })
          }>
          <View
            style={{
              height: 200,
              width: 200,
              borderRadius: 3,
              backgroundColor: '#5cdb95',
              marginBottom: 20,
            }}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
