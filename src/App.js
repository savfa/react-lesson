import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Pages/Profile/Profile";
import Messages from "./components/Pages/Messages/Messages";
import {Route} from "react-router-dom";
import Users from "./components/Pages/Users/Users";


const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="wrapper">
                <div className="container">
                    <div className="wrap d-flex">
                        <Navbar/>
                        <Route path='/profile' component={() => <Profile/>}/>
                        <Route path='/messages' component={() => <Messages/>}/>
                        <Route path='/users' component={() => <Users/>}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default App;