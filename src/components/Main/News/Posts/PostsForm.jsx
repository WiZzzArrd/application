import React from 'react';
import style from "./Posts.module.css";
import {Field} from "redux-form";
import { required} from "../../../../utils/validator";
import {Input} from "./../../../../UI/FormsControls/formsControls"


const PostsForm = (props) => {

    return (
        <div  className={style.form}>
            <Field  component = {Input} name={"post"} placeholder='Что нового?' validate={[required]}
            />
            <button onClick={props.handleSubmit} >Опубликовать</button>
        </div>
    );
};

export default PostsForm;