import React from 'react';
import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <section className={`${styles.profile} d-flex`}>
            <div className={`${styles.avatar}`}>
                <img src="https://pp.userapi.com/c849520/v849520603/1c0ac2/kklw7-ucsTY.jpg?ava=1" alt=""/>
            </div>
            <div className={`${styles.avatar_info} d-flex`}>
                <p>Евгений Савин</p>
                <p>Верстка сайтов: https://freelance.ru/savfa</p>
            </div>
        </section>
    );
}

export default Profile;