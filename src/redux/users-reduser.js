import {usersAPI} from "../api/api";


const GET_USERS = 'GET_USERS';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE;';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT;';

let initialState = {
    isFetching: true,
    count: 5,
    page: 1,
    totalUsersCount: 0,
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
                users:[...action.payload.items],
                page: action.payload.page
            }
        case SET_CURRENT_PAGE: {
            return {...state, page: action.onPageChanged}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}

export const  toggleIsFetchingActionCreator =  (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const getUsersActionCreator = (page,items) => ({type: GET_USERS, payload:{page,items}});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, onPageChanged:page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});

export const getUsersThunk = (page, count)  => {
    return (dispatch) => {
        usersAPI.getUsers(page, count).then(response => {
                dispatch(toggleIsFetchingActionCreator(true));
                dispatch(setUsersActionCreator(response.items));
                dispatch(toggleIsFetchingActionCreator(false));
                dispatch(getUsersActionCreator(page,response.items));
                dispatch(setCurrentPage(page));
                dispatch(setTotalUsersCount(response.totalCount));
            }
        );
    }
}



// export const getUsersThunk = (page) => (dispatch) => {
//     usersAPI.getUsers(page).then(response => {
//         if (!response.error) {
//             dispatch(setCurrentPage(response.page));
//             dispatch(setTotalUsersCount(response.totalCount));
//             dispatch(getUsersActionCreator(page,response.items));
//         }
//     });
// }


export default usersReducer;