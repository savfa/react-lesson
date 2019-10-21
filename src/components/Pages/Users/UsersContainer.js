import React, {Component} from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {getUsersThunk, setUsersThunk} from "../../../redux/users-reduser";

import {compose} from "redux";
import Preloader from "../../../common/Preloader/Preloader";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users {...this.props}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        count: state.usersPage.count,
        page: state.usersPage.page,
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleGetUsers: (page) => {
            page++;
            dispatch(getUsersThunk(page))
        },
        getUsers: ()=> {
            dispatch(setUsersThunk())
        }
    }
}

export default compose( connect(mapStateToProps, mapDispatchToProps))(UsersContainer);