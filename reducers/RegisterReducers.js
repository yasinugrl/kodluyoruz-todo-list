import { CHANGE_REGISTER_DATA } from '../actions/types'; 

const INITIAL_STATE = {
    userName: 'Yasin', password: '12345', city: 'istanbul', email: 'deneme@test.com'
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHANGE_REGISTER_DATA:
          return { ...state, data: action.payload };
    default:
        return state;

    }
  };