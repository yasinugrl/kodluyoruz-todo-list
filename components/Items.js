import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ padding: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: 'black', marginBottom: 10 }}>
            <Text>{this.props.data}</Text>
        </View>
    );
  }
}
