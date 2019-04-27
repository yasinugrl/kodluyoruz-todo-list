import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');



class Bottom extends Component {

    componentWillMount() {
        
    }

    calculateMenuCount = () => {
        return this.props.menu.map((item, i) => {
            return (<Text key={i}>{item}</Text>)
        });
    }

    render() {
        return(
            <View style={styles.view3}>
                {this.calculateMenuCount()}
                
            </View>
        );
    }
}

const styles = {
    
    view3: {  
        flex: 1,
        width, 
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    }
  };

export default Bottom;