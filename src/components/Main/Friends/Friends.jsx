import React from 'react';
import style from "./friends.module.css";
import Friend from "./Friend/Friend";



const Friends = ({friendsItems}) => {
    return (
        <div className={style.wrap}>
            <div className="search friends__search" >
                <input type="text" placeholder={"Поиск"}/>
            </div>

            <div className={style.friends}>
                {friendsItems.map((friend)=>{
                    return <Friend key = {friend.id} id = {friend.id} userName={friend.userName}></Friend>
                })}
            </div>
        </div>
    );
};

export default Friends;