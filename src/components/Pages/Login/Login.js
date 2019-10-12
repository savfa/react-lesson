import React from "react";
import styles from "./Login.module.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <div className={`${styles.login} bg-circle`}>
            <form action="" className='d-flex flex-column' onSubmit={props.handleSubmit}>
                <Field name="email" component="input" type="text" placeholder='Введите email' className={`${styles.email}`}/>
                <Field name="password" component="input" type="password" placeholder='password' className={`${styles.email}`}/>
                <button type="submit" className={`${styles.login_btn}`}>Войти</button>
            </form>
        </div>
    )
}

const ReduxFormLogin = reduxForm({ form: 'login' })(LoginForm);

export default ReduxFormLogin;

