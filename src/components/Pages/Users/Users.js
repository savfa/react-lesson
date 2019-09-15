import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";

const Users = (props) => {
    return (
        <section className={styles.users}>
            <User />
            <User />
            <User />
            <User />
            <User />
        </section>
    );
}

export default Users;