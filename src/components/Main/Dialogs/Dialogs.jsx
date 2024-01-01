import React from 'react';
import style from "./dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";

const Dialogs = ({dialogItems, chatItems, dispatch, chatText}) => {



    return (
        <section className={style.dialogs}>
            <Dialog dialogsItems = {dialogItems}></Dialog>
            <Chat chatItems = {chatItems} dispatch = {dispatch} chatText = {chatText}></Chat>
        </section>
    );
};

export default Dialogs;