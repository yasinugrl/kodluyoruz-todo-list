import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { getTodoList } from '../actions';

import Button from './Button';
import Items from './Items';

import { listData } from './const'

const { width, height } = Dimensions.get('window');


class Main extends Component {

    componentWillMount() {
        // console.log('props değerleri:', this.props);
        // AsyncStorage.getItem('data4', (err, result) => {
        //     if(result != null) {
        //         const array = JSON.parse(result)
        //         console.log('gelene data', array);
        //         this.setState({
        //             data: array 
        //         });
        //         listData.data = array;
        //     }
        //   });
        
    }

    componentDidMount() {
        this.props.getTodoList();
    }
    render() {
        return(
            <View style={styles.view2}>
                <FlatList
                    style={{ backgroundColor: '', width, marginTop: 20}}
                    data={this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <Items 
                    data={item}
                    index={index}
                    />
                    }
                />

             </View>
        );
    }
}

const styles = {
    view2: {  
        flex: 9, 
        // width,
        backgroundColor: '',
        alignItems: 'center',
        paddingTop: 20,
        
    },
  };

const mapStateToProps = ({ todoListResponse }) => {
    console.log('globalden Gelen liste objesi ', todoListResponse);
    return { data: todoListResponse.data }
};

export default connect(mapStateToProps, { getTodoList })(Main);