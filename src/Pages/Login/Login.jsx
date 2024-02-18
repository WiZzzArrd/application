import React from 'react';
import style from "./login.module.css";
import logo from "../../assets/img/vk.png"
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

const Login = (props) => {
    const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


    const onSubmitHandler = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}></Redirect>
    }


    return (
        <div className={style.login}>
            <img style={{marginBottom: "10px"}} width={40} height={40} src={logo} alt="logo"/>
            <h2 className={style.title}>Вход ВКонтакте</h2>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login);