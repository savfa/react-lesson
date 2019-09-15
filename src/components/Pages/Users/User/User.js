import React from 'react';
import styles from "./User.module.css";
import user from "../../../../assets/img/unknown-user.png";

const User = (props) => {
   return (
       <div className={`${styles.userWrap} d-flex`}>
           <a href="#" className={styles.avatar}><img src={user} alt="user" className={styles.photo}/></a>
           <div className={styles.userInfo}>
               <p className={styles.title}>Имя пользователя</p>
               <p className={styles.status}>Статус пользователя</p>
           </div>
       </div>
   );
}

export default User;