import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, AsyncStorage } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux'

import { addTodoList } from '../actions';

import { listData } from './const'
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');


let data = [];

class AddList extends Component {

    state = {
        title: '',
        desc: '',
        data: []
    }

    componentWillMount() {
        console.log('Lista datası: ', listData.data);
        
        data = listData.data

        if(this.props.isUpdate) {
            const { title, desc } = data[this.props.index];

            this.setState({
                title,
                desc, 
            })
        }
    }

    async componentWillReceiveProps(props) {
        console.log('Gelen propslar: ', props);
        if(props.isCreate) {
            const str = JSON.stringify(props.data);
            await AsyncStorage.setItem('data4', str);
            Actions.pop();
        }
        
    }

  render() {
    return (
        <View style={styles.view2}>
         <TextInput
                    style={styles.inputStyle}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                    placeholder={'Başlık Giriniz'}
                />
                <TextInput
                    style={[styles.inputStyle, { height: 75 }]}
                    onChangeText={(desc) => this.setState({ desc })}
                    value={this.state.desc}
                    multiline={true}
                    numberOfLines={10}
                    placeholder={'Açıklama Giriniz'}
                />

                <Button
                onClick={async () => { 
                    
                    
                    // const str = JSON.stringify(data);
                    // await AsyncStorage.setItem('data4', str);
                    // Actions.pop();
                    // Actions.refresh({ key: Math.random(), dataBack: 'Bakc data' });
                    const params = { 
                        title: this.state.title,
                        desc: this.state.desc,
                    };
                    // data.push(params)
                    this.props.addTodoList(params)
                    
                }}
                title={'Kaydet'}
                style={{ backgroundColor: '#b2871a'}}
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
}

const mapStateToProps = ({ todoListResponse }) => {
    console.log('globalden Gelen liste objesi Add List: ', todoListResponse);
    return { data: todoListResponse.data, isCreate:  todoListResponse.isCreate}
};

export default connect(mapStateToProps, { addTodoList })(AddList);