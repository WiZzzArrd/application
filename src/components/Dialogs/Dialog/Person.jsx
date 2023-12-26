import React from 'react';
import style from "./person.module.css";
import {NavLink} from "react-router-dom";

const Person = (props) => {
    return (
        <div className={style.person}>
           <NavLink to={props.personUrl}>{props.name}</NavLink>
        </div>
    );
};

export default Person;