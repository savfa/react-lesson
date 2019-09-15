import React from 'react';
import styles from './Messages.module.css';

const Messages = (props) => {
    return (
        <section className={`${styles.messages} d-flex`}>
           Сообщения
        </section>
    );
}

export default Messages;