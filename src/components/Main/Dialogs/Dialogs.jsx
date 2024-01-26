import React from 'react';
import style from "./dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";



const DialogsContainer = (props) => {



    return (
        <section className={style.dialogs}>
            <Dialog dialogItems = {props.messages.dialogItems} ></Dialog>
            <Chat  addMessage = {props.addMessage} chatText = {props.messages.chatText}  changeMessage = {props.changeMessage} chatItems = {props.messages.chatItems}        ></Chat>
        </section>
    );
};

export default DialogsContainer;