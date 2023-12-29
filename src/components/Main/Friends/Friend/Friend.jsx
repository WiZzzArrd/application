import React from 'react';
import style from "./friend.module.css";
import user from "../../../../assets/users/1.png"

const Friend = ({userName, id}) => {
    return (
        <div className={style.friend}>
            <div className={style.logo}>
                <img width={100} height={100} src={user} alt="user"/>
            </div>
            <div className={style.info}>
                <a href="#">{userName}</a>
            </div>
        </div>
    );
};

export default Friend;