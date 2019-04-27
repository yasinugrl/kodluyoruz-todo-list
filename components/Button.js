import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableOpacity 
        onPress={() => this.props.onClick() }
        activeOpacity={0.7}
        >
            <View style={[styles.buttonStyle, this.props.style]}
                >

            <Text style={{ color: 'white', fontWeight: 'bold',}}>{this.props.title}</Text>

            </View>
        </TouchableOpacity>
    );
  }
}

const styles = {
    buttonStyle: { 
        width: width * 0.9, height: 40, backgroundColor: 'blue', marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',   
        borderRadius: 20
    }
}
