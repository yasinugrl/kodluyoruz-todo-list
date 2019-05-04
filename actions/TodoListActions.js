
import { AsyncStorage } from 'react-native'; 
import { Actions } from 'react-native-router-flux';
import {
    GET_TODO_LIST,
    ADD_TODO_LIST,
    DELETE_TODO_LIST,
    UPDATE_TODO_LIST
} from './types';

export const getTodoList = () => {
    return (dispatch) => {
        AsyncStorage.getItem('data4', (err, result) => {
            if(result != null) {
                const array = JSON.parse(result)
                console.log('gelene data11', array);
                dispatch({
                    type: GET_TODO_LIST,
                    payload: array
                });
            }
          });
      
    };
};


export const addTodoList = (params) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO_LIST,
            payload: params
        });

        // const str = JSON.stringify(data);
        // await AsyncStorage.setItem('data4', str);
        // Actions.pop();
        // Actions.refresh({ key: Math.random(), dataBack: 'Bakc data' });
      
    };
};