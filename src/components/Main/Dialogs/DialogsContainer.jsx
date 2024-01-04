import React from 'react';
import style from "./dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/messages-reducer";

const DialogsContainer = ({dialogItems, chatItems, dispatch, chatText}) => {


    function addMessageHandler(message){
        dispatch(addMessageActionCreator(message))
        dispatch(updateMessageActionCreator(""))
    }

    function changeMessageHandler(text){
        dispatch(updateMessageActionCreator(text))
    }



    return (
        <section className={style.dialogs}>
            <Dialog dialogsItems = {dialogItems}></Dialog>
            <Chat chatItems = {chatItems}
                  chatText = {chatText}
                  addMessage = {addMessageHandler}
                  changeMessage = {changeMessageHandler}
            ></Chat>
        </section>
    );
};

export default DialogsContainer;