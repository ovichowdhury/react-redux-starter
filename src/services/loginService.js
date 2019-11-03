import {login} from './url';
import axios from 'axios';


export const callLoginApi = async (p) => {
    let payload = {
        username: p.inputOne,
        password: p.inputTwo
    }
    let res = await axios.post(login, payload);
    return res;
} 