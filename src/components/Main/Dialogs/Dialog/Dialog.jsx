import React from 'react';
import style from "./dialog.module.css";
import Person from "./Person";

const Dialog = ({dialogsItems}) => {
    return (
        <div className={style.dialog}>
            {dialogsItems.map((item)=>{
                return <Person id = {item.id} name = {item.name} key = {item.id}></Person>
            })}
        </div>
    );
};

export default Dialog;