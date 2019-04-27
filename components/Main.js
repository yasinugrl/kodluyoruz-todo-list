import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, AsyncStorage } from 'react-native';

import Button from './Button';
import Items from './Items';

const { width, height } = Dimensions.get('window');



class Main extends Component {

    state = {
        input: '',
        text: '',
        data: []
    }

    componentWillMount() {
        const value = AsyncStorage.getItem('data1', (err, result) => {
            if(result != null) {
                const array = result.split(",");
                console.log('gelen ata', array[0]);
                this.setState({
                    data: array 
                });
            }
          });
        
    }
    render() {
        return(
            <View style={styles.view2}>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(input) => this.setState({ input })}
                    value={this.state.input}
                    placeholder={'Başlık Giriniz'}
                />
                <TextInput
                    style={[styles.inputStyle, { height: 75 }]}
                    onChangeText={(input) => this.setState({ input })}
                    value={this.state.input}
                    multiline={true}
                    numberOfLines={10}
                    placeholder={'Açıklama Giriniz'}
                />

                <Button
                onClick={() => { 
                    this.setState(prevState => ({
                        data: [...prevState.data, this.state.input]
                    }));

                    AsyncStorage.setItem('data1', this.state.data.toString());
                }}
                title={'Kaydet'}
                style={{ backgroundColor: '#b2871a'}}
                />

                <FlatList
                    style={{ backgroundColor: '', width, marginTop: 20}}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <Items data={item}
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
    
    inputStyle: {
        height: 40, 
        width: width * 0.9,
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 5,
    }
  };

export default Main;