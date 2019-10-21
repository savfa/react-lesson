import {usersAPI} from "../api/api";


const GET_USERS = 'GET_USERS';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    isFetching: true,
    count: 5,
    page: 1,
    term: null,
    users: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case GET_USERS:
            return {
                ...state,
                users:[...action.handleGetUsers.items],
                page: action.handleGetUsers.page
            }
        default:
            return state;
    }
}


export const setUsers = (users) => ({type: SET_USERS, users});
export const  toggleIsFetchingActionCreator =  (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setUsersThunk = ()  => {
    return (dispatch) => {
        usersAPI.getUsers().then(response => {
                dispatch(toggleIsFetchingActionCreator(true));
                dispatch(setUsers(response.items));
                dispatch(toggleIsFetchingActionCreator(false));
            }
        );
    }
}

export const getUsersActionCreator = (page,items) => ({type: GET_USERS, handleGetUsers:{page,items}});

export const getUsersThunk = (page) => (dispatch) => {
    usersAPI.getUsers(page).then(response => {
        if (!response.error) {

            dispatch(getUsersActionCreator(page,response.items));
        }
    });
}


export default usersReducer;