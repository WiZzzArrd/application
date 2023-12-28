import React from 'react';
import style from "./chat.module.css";
import Message from "./Message";

const Chat = ({chatItems}) => {
    return (
        <div className={style.chat}>
            {chatItems.map((item)=>{
                return <Message key = {item.id} id = {item.id} message = {item.message}></Message>
            })}
        </div>
    );
};

export default Chat;