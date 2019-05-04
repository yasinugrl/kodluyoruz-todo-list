import { GET_TODO_LIST, ADD_TODO_LIST, DELETE_TODO_LIST, UPDATE_TODO_LIST } from '../actions/types'; 

const INITIAL_STATE = {
    data: [],
    isCreate: false
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_TODO_LIST:
          return { ...state, data: action.payload
    };
    case ADD_TODO_LIST:
        console.log('GElen addd değerleri');
        console.log(action.payload);
        return { ...state, data: [...state.data, action.payload], isCreate: true
        };

    default:
        return state;

    }
  };