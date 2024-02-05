import React from 'react';
import style from "./login.module.css";
import logo from "../../assets/img/vk.png"
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";

const Login = () => {

    const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


    const  onSubmitHandler  = (a)=>{
        console.log(a)
    }

    return (
        <div className={style.login}>
            <img style={{marginBottom: "10px"}} width={40} height={40} src={logo} alt="logo"/>
            <h2 className={style.title}>Вход ВКонтакте</h2>
        <LoginReduxForm onSubmit = {onSubmitHandler}/>
        </div>
    );
};

export default Login;