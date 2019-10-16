import React from 'react';
import style from "./Menu.module.css";
import {NavLink} from "react-router-dom";


const Menu = (props) => {
    return (
        <ul className={`${style.menu} d-flex`}>
            <li><NavLink to="/" className={style.a}>Люди</NavLink></li>
            <li><NavLink to="/" className={style.a}>Сообщества</NavLink></li>
            <li><NavLink to="/" className={style.a}>Музыка</NavLink></li>
            <li><NavLink to="/" className={style.a}>Помощь</NavLink></li>
            <li>
                { props.isAuth
                    ? <NavLink to={"/"} className={style.a}>{props.login}</NavLink>
                    : <NavLink to={"/login"} className={style.a} onClick={()=>(props.handleAuth())}>Вход</NavLink> }
            </li>



        </ul>
    );
}

export default Menu;