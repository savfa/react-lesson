import React from 'react';
import style from "./Header.module.css";
import  logo from './../../img/logo.svg';
import Menu from "../Menu/Menu";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={`${style.header} flex align-items-center`}>
            <div className="container">
                <div className="header__wrap d-flex">
                    <NavLink to='/profile'><img className={`${style.logo}`} src={logo} /></NavLink>
                    <Menu/>
                </div>
            </div>
        </header>
    );
}

export default Header;