import React from 'react';
import style from "./login.module.css";
import {Field} from "redux-form";
import {Input} from "../../UI/FormsControls/formsControls";
import {required} from "../../utils/validator";


const LoginForm = (props) => {


    return (
        <>
            <form className={style.form} onSubmit={props.handleSubmit}>
                <Field component={Input}
                       name={"email"}
                       type={"email"}
                       placeholder={"Email"}
                       validate={[required]}
                />

                <Field component={Input}
                       name={"password"}
                       type = {'password'}
                       placeholder={"Password"}
                       validate={[required]}
                />

                {props.error && <div className={style.error}>{props.error}</div>}

                <div className={style.checkbox}>
                    <Field type="checkbox" name={"rememberMe"} component={"input"}    />
                    <label>Запомнить меня</label>
                </div>
                <button onClick={props.handleSubmit} className={style.btn}>войти</button>

            </form>
        </>
    );
};

export default LoginForm;