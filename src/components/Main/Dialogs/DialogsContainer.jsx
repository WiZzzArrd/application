import React from 'react';
import style from "./dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/messages-reducer";
import StoreContext from "../../../storeContext";

const DialogsContainer = () => {


    return (

        <StoreContext.Consumer>
            {(store)=>{

                let state = store.getState();

                function addMessageHandler(message){
                    store.dispatch(addMessageActionCreator(message))
                    store.dispatch(updateMessageActionCreator(""))
                }

                function changeMessageHandler(text){
                    store.dispatch(updateMessageActionCreator(text))
                }

                return (
                    <section className={style.dialogs}>
                        <Dialog dialogsItems = {state.messagesReducer.dialogItems}></Dialog>
                        <Chat chatItems = {state.messagesReducer.chatItems}
                              chatText = {state.messagesReducer.chatText}
                              addMessage = {addMessageHandler}
                              changeMessage = {changeMessageHandler}
                        ></Chat>
                    </section>

                )
            }}
        </StoreContext.Consumer>


    );
};

export default DialogsContainer;