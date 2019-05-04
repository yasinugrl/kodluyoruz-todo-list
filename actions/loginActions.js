import { CHANGE_LOGIN_DATA } from './types';
export const changeLoginValue = (prams) => (dispatch) => {
    dispatch({
      type: CHANGE_LOGIN_DATA,
      payload: prams
    });
};