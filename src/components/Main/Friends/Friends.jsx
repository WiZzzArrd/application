import React from 'react';
import style from "./friends.module.css";
import Friend from "./Friend/Friend";
import Loader from "../../../UI/Loader/Loader";

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
                       followed={friend.followed} avatar={friend.photos} follow={props.follow} unfollow = {props.unfollow}
                       followingInProgress = {props.followingInProgress}
        ></Friend>
    })



    return (
        <section className={style.wrap}>
            <div className="search friends__search">
                <input type="text" placeholder={"Поиск"}/>
            </div>

            <div className={style.friends}>
                {props.isPagesLoading  ? <Loader style = {{marginTop: "20px"}}/> :
                    <div className={style.pages}>
                        {buttons}
                    </div>
                }

                {props.isFriendsLoading ? <Loader style = {{marginTop: "50px"}}/> :
                    friends
                }
            </div>
        </section>
    );
};

export default Friends;