import React, {useRef, useState} from 'react';
import style from "./chat.module.css";
import Message from "./Message";
import send from "../../../../assets/icons/send.svg"

const Chat = ({chatItems}) => {

    const inputRef = useRef();

        function clickHandler(){
            console.log(inputRef.current.value)
            inputRef.current.value = ""
        }

    return (
        <div className={style.chat}>
            {chatItems.map((item)=>{
                return <Message key = {item.id} id = {item.id} message = {item.message}></Message>
            })}

            <div className={style.send}>
                <div className="search">
                    <input ref={inputRef}
                          placeholder="Напишите сообщение..." type="text"/>


                </div>


               <img onClick={clickHandler} src={send} width={30} height={30} alt="send"/>
            </div>
        </div>
    );
};

export default Chat;