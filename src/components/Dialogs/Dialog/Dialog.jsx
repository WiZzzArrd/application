import React from 'react';
import style from "./dialog.module.css";
import Person from "./Person";

const Dialog = () => {
    return (
        <div className={style.dialog}>
            <Person personUrl = "/messages/1" name = "Вася"></Person>
            <Person  personUrl = "/messages/2"  name = "Андрей"></Person>
            <Person  personUrl = "/messages/3"  name = "Саша"></Person>
            <Person  personUrl = "/messages/4"  name = "Саша"></Person>
            <Person  personUrl = "/messages/5"  name = "Саша"></Person>
        </div>
    );
};

export default Dialog;