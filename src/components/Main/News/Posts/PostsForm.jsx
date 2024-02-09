import React from 'react';
import style from "./Posts.module.css";
import {Field} from "redux-form";


const PostsForm = (props) => {

    return (
        <div  className={style.form}>
            <Field  component = "input" name={"post"} placeholder='Что нового?'
            />
            <button onClick={props.handleSubmit} >Опубликовать</button>
        </div>
    );
};

export default PostsForm;