import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./Pages/Profile/Profile";
import Messages from "./Pages/Messages/Messages";
import {Route} from "react-router-dom";


const App = () => {
    return (
            <React.Fragment>
                <Header/>
                <div className="wrapper">
                    <div className="container">
                        <div className="wrap d-flex">
                            <Navbar/>
                            <Route path='/profile' component={() => <Profile />}/>
                            <Route path='/messages' component={() => <Messages />}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
}


export default App;