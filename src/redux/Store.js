import {combineReducers, createStore} from "redux";
import messagesReduser from "./messages-reduser";

let redusers = combineReducers({
    messagesReduser
});



let store = createStore(redusers);

export default store;
