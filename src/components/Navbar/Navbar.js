import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <section className={styles.navbar}>
            <ul>
                <li><NavLink to="/profile" className={styles.a1}>Моя страница</NavLink></li>
                <li><NavLink to="#" className={styles.a}>новости</NavLink></li>
                <li><NavLink to="/messages" className={styles.a}>Сообщения</NavLink></li>
                <li><NavLink to="/users" className={styles.a} >Друзья</NavLink></li>
                <li><NavLink to="#" className={styles.a}>Фотографии</NavLink></li>
            </ul>
        </section>
    );
}

export default Navbar;