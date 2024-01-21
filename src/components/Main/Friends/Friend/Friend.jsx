import React from 'react';
import style from "./friend.module.css";
import user from "../../../../assets/users/1.png";
import {NavLink} from "react-router-dom";
import {deleteFollow, postFollow} from "../../../../api/api";



const Friend = ({
                    userName,
                    id,
                    userInfo,
                    followed,
                    avatar,
                    follow,
                    unfollow,
                    setFollowingInProgress,
                    followingInProgress
                }) => {


    let addFriendButton = ""
    let disabled = followingInProgress.some(friendId => friendId === id);

    if (followed) {
        addFriendButton = <button disabled={disabled} onClick={() => {
            setFollowingInProgress(true, id)
            deleteFollow(id).then((response) => {
                if (response.resultCode === 0) {
                    console.log("Удален из друзей")
                    unfollow(id)
                }
            }).catch(() => console.error("При удалении произошла ошибка")).finally(() => {
                setFollowingInProgress(false, id)
            })

        }}>Удалить из друзей</button>
    } else {
        addFriendButton = <button  disabled={disabled} onClick={() => {
            setFollowingInProgress(true, id)
            postFollow(id).then((response) => {
                if (response.resultCode === 0) {
                    console.log("Добавлен в друзья")
                    follow(id)
                }
            }).finally(() => {
            setFollowingInProgress(false, id)
            })
        }}>Добавить в друзья</button>
    }

    return (
        <div className={style.friend}>
            <div className={style.logo}>
                <NavLink to={`/profile/${id}`}>
                    <img width={90} height={90} src={avatar.small || user} alt="user"/>
                </NavLink>
            </div>
            <div className={style.infoblock}>
                <div className={style.info}>
                    <NavLink to={`/profile/${id}`}>{userName}</NavLink>
                    <p>{userInfo}</p>
                </div>
                <div className={style.actions}>
                    { addFriendButton}
                </div>
            </div>
        </div>
    );
};

export default Friend;