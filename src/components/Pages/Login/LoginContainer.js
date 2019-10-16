import React from "react";
import {connect} from "react-redux";
import {loginThunk} from "../../../redux/auth-reduser";
import Login from "./Login";

const LoginContainer = (props) => {
    return (
        <Login {...props} onSubmit={props.handleAuth}/>
    )
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleAuth: (values) => {
            dispatch(loginThunk(values))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)