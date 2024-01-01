import React from 'react';
import style from "./friends.module.css";
import Friend from "./Friend/Friend";



const Friends = ({friendsItems}) => {
    let friendsData = "";

    if(!friendsItems){
        friendsData = <p >Тут пока нет друзей...</p>
    }else{
        friendsData = friendsItems.map((friend)=>{
            return <Friend key = {friend.id} id = {friend.id} userName={friend.userName}></Friend>
        })
    }


    return (
        <div className={style.wrap}>
            <div className="search friends__search" >
                <input type="text" placeholder={"Поиск"}/>
            </div>

            <div className={style.friends}>
                {friendsData}
            </div>
        </div>
    );
};

export default Friends;