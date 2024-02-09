import React from 'react';
import style from "./chat.module.css";
import Message from "./Message";
import {reduxForm} from "redux-form";
import ChatForm from "./ChatForm";



const Chat = ({addMessage, chatItems }) => {
    let chatData = "";

    if(!chatItems){
        chatData = <p>Тут пока нет сообщений..."</p>
    }else{
        chatData = chatItems.map((item)=>{
            return <Message key = {item.id} id = {item.id} message = {item.message}></Message>
        })
    }

    const ChatReduxForm = reduxForm({form: "chatForm"})(ChatForm)



    function onAddMessageHandler(props){
        addMessage(props.dialogMessage)
    }


    return (
        <div className={style.chat}>
            {chatData}
            <div className={style.send}>
                <ChatReduxForm onSubmit={onAddMessageHandler}></ChatReduxForm>
            </div>
        </div>
    );
};

export default Chat;