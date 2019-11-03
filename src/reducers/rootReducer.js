import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";

const rootReducer = combineReducers({
    login: LoginReducer
})

export default rootReducer;