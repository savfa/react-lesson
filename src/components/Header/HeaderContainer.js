import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunc} from "../../redux/auth-reduser";


const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    );
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleAuth: () => {
            dispatch(getAuthUserDataThunc())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);