import React from 'react';
import styles from './Profile.module.css';
import PostContainer from "./Post/PostContainer";
import Status from "./Status";



const Profile = (props) => {
    return (
        <section className={`${styles.profile} d-flex`}>
            <div className={`${styles.avatar} bg-circle`}>
                <img src="https://pp.userapi.com/c849520/v849520603/1c0ac2/kklw7-ucsTY.jpg?ava=1" alt=""/>
            </div>
            <div className={`${styles.avatar_info}`}>
                <Status status={'Мой статус'}/>
                <h1 className={`${styles.posts}`}>Мои посты</h1>
                <PostContainer />
            </div>
        </section>
    );
}

export default Profile;