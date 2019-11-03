import { LOGIN } from '../actions/loginAction';

const initState = {
    loginResponse: {}
}

const loginReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN: 
            return Object.assign({}, state, {
                loginResponse: action.payload
            });
        default:
            return state;
    }
}

export default loginReducer;