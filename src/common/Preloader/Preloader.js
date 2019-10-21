import  React from 'react';
import styles from './preloader.module.css';
import preloader from'../../assets/img/loader-spinner.svg';

const Preloader = (props) => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;