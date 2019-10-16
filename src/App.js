import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import Messages from "./components/Pages/Messages/Messages";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Users from "./components/Pages/Users/Users";
import {Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Pages/Login/LoginContainer";




class App extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderContainer/>
                <div className="wrapper">
                    <div className="container">
                        <div className="wrap d-flex">
                            <Navbar/>
                            <Switch>
                                <Redirect exact from="/" to='/profile'/>
                                <Route path='/profile' render={() => <Profile/>}/>
                                <Route path='/messages' render={() => <Messages/>}/>
                                <Route path='/users' render={() => <Users/>}/>
                                <Route path='/login' render={() => <LoginContainer />}/>
                            </Switch>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


const RootApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}

export default RootApp;