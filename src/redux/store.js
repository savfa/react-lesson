import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import messagesReducer from "./messages-reducer";
import profilePostReducer from "./profilePost-reducer";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./auth-reduser";
import thunk from "redux-thunk";
import usersReducer from "./users-reduser";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profilePostReducer,
    auth: authReducer,
    usersPage: usersReducer,
    form: formReducer
});

// import { createStore, applyMiddleware, compose } from 'redux';

/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers/!*, composeEnhancers((applyMiddleware(...middleware))*!/);*/

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
));



// let store = createStore(reducers);
export default store;
window.state = store.getState();