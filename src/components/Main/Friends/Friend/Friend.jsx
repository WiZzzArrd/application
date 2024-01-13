import React from 'react';
import style from "./friend.module.css";
import user from "../../../../assets/users/1.png";
import {NavLink} from "react-router-dom";


const Friend = ({ userName, id, userInfo, followed, avatar, follow, unfollow} ) => {



    let addFriendButton = ""

    if(followed){
        addFriendButton =  <button onClick={()=> unfollow(id) } href="#">Удалить из друзей</button>
    }else{
        addFriendButton =  <button onClick={()=> follow(id) } href="#">Добавить в друзья</button>
    }

    return (
        <div className={style.friend}>
            <div className={style.logo}>
                <NavLink to = {`/profile/${id}`}  >
                  <img width={90} height={90} src={avatar.small || user} alt="user"/>
                </NavLink>
            </div>
            <div className={style.infoblock}>
                <div className={style.info}>
                    <NavLink  to = {`/profile/${id}`}>{userName}</NavLink>
                    <p>{userInfo}</p>
                </div>
                <div className={style.actions}>
                    {addFriendButton}
                </div>
            </div>
        </div>
    );
};

export default Friend;