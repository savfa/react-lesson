import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setUserDataActionCreator = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUserDataActionCreator(id, login, email, true));
            }
        }
    )


}

export default authReducer;