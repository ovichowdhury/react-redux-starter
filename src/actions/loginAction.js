import {callLoginApi} from '../services/loginService';

export const LOGIN = "LOGIN";

export const loginSuccess = (d) => {
    return {
        type: LOGIN,
        payload: d
    }
}


export const loginRequest = (payload) => {
    return async (dispatch) => {
        try {
            
            let res = await callLoginApi(payload);
            dispatch(loginSuccess(res.data));
        }
        catch(ex) {
            dispatch(loginSuccess(ex));
        }
        
    }
}