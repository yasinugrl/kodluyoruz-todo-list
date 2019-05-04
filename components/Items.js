import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableOpacity
        onPress={() => Actions.addlist({ index: this.props.index, isUpdate: true })
        }
        style={{ padding: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: 'black', marginBottom: 10 }}>
            <Text style={{ fontSize: 14}}>{this.props.data.title}</Text>
            <Text style={{ fontSize: 10}}>{this.props.data.desc}</Text>
        </TouchableOpacity>
    );
  }
}
