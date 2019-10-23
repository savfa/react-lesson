import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";
import Pagination from "../../../common/Pagination/Pagination";

const Users = (props) => {
    let userItem = props.users.map(user => {
        return <User key={user.id} {...user}/>
    })
    return (
        <section className={styles.users}>
            <Pagination {...props} />
            {userItem}
        </section>
    );
}

export default Users;