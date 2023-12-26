import React from 'react';
import style from "./chat.module.css";
import Message from "./Message";

const Chat = () => {
    return (
        <div className={style.chat}>
            <Message message = "hello"></Message>
            <Message message = "how are yddddddddddddddddddddddddddddddddddddddddddddddddddddddou"></Message>
            <Message message = "cool"></Message>
        </div>
    );
};

export default Chat;