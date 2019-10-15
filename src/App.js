import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Pages/Profile/Profile";
import Messages from "./components/Pages/Messages/Messages";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Users from "./components/Pages/Users/Users";
import {Provider} from "react-redux";
import store from "./redux/store";
import ReduxFormLogin from "./components/Pages/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";



class App extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
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
                                <Route path='/login' render={() => <ReduxFormLogin onSubmit={this.submit}/>}/>
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