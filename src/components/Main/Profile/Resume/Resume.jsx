import React from 'react';
import style from "./resume.module.css";

const Resume = (props) => {
    return (
        <div className={style.resume}>
            <p>Резюме</p>
            <ul>
                <li>Статус: {props.profile.info.lookingForAJob || <span>Не указано</span>}</li>
                <li>Описание: {props.profile.info.lookingForAJobDescription || <span>Не указано</span>} </li>
            </ul>
        </div>
    );
};

export default Resume;