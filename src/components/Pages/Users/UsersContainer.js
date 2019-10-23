import React, {Component} from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {getUsersThunk} from "../../../redux/users-reduser";

import {compose} from "redux";
import Preloader from "../../../common/Preloader/Preloader";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.count);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalItemsCount={this.props.totalUsersCount}
                       pageSize={this.props.count}
                       currentPage={this.props.page}
                       onPageChanged={this.props.onPageChanged}
                       {...this.props} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        count: state.usersPage.count,
        page: state.usersPage.page,
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (page, count) => {
            dispatch(getUsersThunk(page, count));
        },
        onPageChanged: (page) => {
            dispatch(getUsersThunk(page));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(UsersContainer);