import React from 'react';
import style from "./login.module.css";
import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <>
            <form className={style.form} onSubmit={props.handleSubmit}>
                <Field component={"input"}
                       name={"login"}
                       placeholder={"Логин"}/>
                <Field component={"input"}
                       name={"password"}
                       placeholder={"Пароль"}/>

                <div className={style.checkbox}>
                    <Field type="checkbox" name={"checkbox"} component={"input"}/>
                    <label>Сохранить ввод</label>
                </div>
                <button className={style.btn}>войти</button>

            </form>
        </>
    );
};

export default LoginForm;