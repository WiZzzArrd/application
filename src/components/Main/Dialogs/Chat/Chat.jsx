import React, {useRef, useState} from 'react';
import style from "./chat.module.css";
import Message from "./Message";
import send from "../../../../assets/icons/send.svg"

const Chat = ({chatItems,dispatch, chatText}) => {



    let chatData = "";

    if(!chatItems){
        chatData = <p>Тут пока нет сообщений..."</p>
    }else{
        chatData = chatItems.map((item)=>{
            return <Message key = {item.id} id = {item.id} message = {item.message}></Message>
        })
    }

    const inputRef = useRef();

        function clickHandler(){

            dispatch({type : "ADD-MESSAGE", payload: {message:  inputRef.current.value}})

            dispatch({type: "UPDATE-MESSAGE", payload: {text: ""}})


        }

        function changeInputHandler(){

            dispatch({type: "UPDATE-MESSAGE", payload: {text: inputRef.current.value}})
        }



    return (
        <div className={style.chat}>
            {chatData}

            <div className={style.send}>
                <div className="search">
                    <input ref={inputRef}
                          placeholder="Напишите сообщение..." type="text"
                           value = {chatText}
                            onChange={changeInputHandler}
                    />


                </div>


               <img onClick={clickHandler} src={send} width={30} height={30} alt="send"/>
            </div>
        </div>
    );
};

export default Chat;