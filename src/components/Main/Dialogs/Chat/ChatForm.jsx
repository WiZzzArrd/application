import React from 'react';
import style from "./chat.module.css";
import {Field} from "redux-form";
import {required} from "../../../../utils/validator";
import {Input} from "../../../../UI/FormsControls/formsControls";

const ChatForm = (props) => {
    return (
        <>
            <div className="search">
                <Field placeholder="Напишите сообщение..."
                       name={"dialogMessage"} component={Input} validate={[required]}
                />
            </div>
            <button onClick={props.handleSubmit} className={style.btn}></button>
        </>
    );
};

export default ChatForm;