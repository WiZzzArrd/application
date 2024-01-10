import React from 'react';
import style from "./friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i)
    }

    let buttons =  pages.map((button) => {
        return <span key={button}
                     onClick={() => props.onChangePage(button)}
                     className={props.currentPage === button && style.selected}>{button}</span>
    })

    let friends = props.friends.map((friend) => {
        return <Friend key={friend.id} id={friend.id} userName={friend.name} userInfo={friend.status}
                       followed={friend.followed} avatar={friend.photos} follow={props.follow}
                       unfollow={props.unfollow}></Friend>
    })



    return (
        <div className={style.wrap}>
            <div className="search friends__search">
                <input type="text" placeholder={"Поиск"}/>
            </div>

            <div className={style.friends}>
                <div className={style.pages}>
                    {buttons}
                </div>
                   {friends}
            </div>
        </div>
    );
};

export default Friends;