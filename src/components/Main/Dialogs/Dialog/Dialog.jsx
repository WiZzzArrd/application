import React from 'react';
import style from "./dialog.module.css";
import Person from "./Person";

const Dialog = ({dialogItems}) => {



    let dialogData = ""

    if(!dialogItems){
        dialogData = <p>Нет пользователей :(</p>
    }else{
        dialogData = dialogItems.map((item)=> {
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