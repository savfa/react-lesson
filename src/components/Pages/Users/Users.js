import React from 'react';
import styles from './Users.module.css';
import User from "./User/User";

const Users = (props) => {
    let userItem = props.users.map(user => {
        return <User key={user.id} {...user}/>
    })
    return (
        <section className={styles.users}>
            <button onClick={()=>{props.handleGetUsers(props.page)}}> еще >> </button>
            {userItem}
</section>
);
}

export default Users;