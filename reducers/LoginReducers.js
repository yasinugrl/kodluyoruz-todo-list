import { CHANGE_LOGIN_DATA } from '../actions/types'; 

const INITIAL_STATE = {
    userName: 'yasin',
    password: '12345',
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHANGE_LOGIN_DATA:
          return { ...state, 
            
            userName: action.payload.userName, password: action.payload.password 
        };

    default:
        return state;

    }
  };