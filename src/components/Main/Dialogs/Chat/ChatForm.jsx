import React from 'react';
import style from "./chat.module.css";
import {Field} from "redux-form";

const ChatForm = (props) => {
    return (
        <>
            <div className="search">
                <Field placeholder="Напишите сообщение..."
                       name={"dialogMessage"} component={"input"}
                />
            </div>
            <button onClick={props.handleSubmit} className={style.btn}></button>
        </>
    );
};

export default ChatForm;