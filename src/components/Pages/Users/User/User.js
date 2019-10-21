import React from 'react';
import styles from "./User.module.css";
import user from "../../../../assets/img/unknown-user.png";
import {NavLink} from "react-router-dom";

const User = (props) => {
   return (
       <div className={`${styles.userWrap} d-flex`}>
           <NavLink to={`user/${props.id}`} className={styles.avatar}>
               {
                   (props.photos.small) ?
                   <img src={props.photos.small} alt="user" className={styles.photo}/> :
                   <img src={user} alt="user" className={styles.photo}/>
               }
           </NavLink>
           <div className={styles.userInfo}>
               <p className={styles.title}>{props.name}</p>
               <p className={styles.status}>{props.status}</p>
           </div>
       </div>
   );
}

export default User;