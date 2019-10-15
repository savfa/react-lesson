import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reduser";


class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        payload: () => {
            dispatch(getAuthUserData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);