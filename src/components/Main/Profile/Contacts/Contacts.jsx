import React from 'react';
import style from "./contacts.module.css"

const Contacts = (props) => {
    return (
        <div className={style.contacts}>
            <p>Мои контакты</p>

            <ul>
                <li>Facebook: {props.profile.info.contacts.facebook || <span>Не указано</span>}</li>
                <li>Twitter: {props.profile.info.contacts.twitter || <span> Не указано</span>}</li>
                <li> VK: {props.profile.info.contacts.vk || <span> Не указано</span>} </li>
            </ul>
        </div>
    );
};

export default Contacts;