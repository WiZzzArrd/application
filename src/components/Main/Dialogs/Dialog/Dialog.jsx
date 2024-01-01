import React from 'react';
import style from "./dialog.module.css";
import Person from "./Person";

const Dialog = ({dialogsItems}) => {
    let dialogData = ""

    if(!dialogsItems){
        dialogData = <p>Нет пользователей :(</p>
    }else{
        dialogData = dialogsItems.map((item)=> {
            return <Person id={item.id} name={item.name} key={item.id}></Person>
        })
    }

    return (

        <div className={style.dialog}>
            {dialogData}
        </div>
    );
};

export default Dialog;