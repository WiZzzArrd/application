import React, {Component} from 'react';
import style from "./friends.module.css";
import axios from "axios";
import Friend from "./Friend/Friend";

class Friends extends Component {


    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {

            this.props.setFriends(response.data.items)

        })
    }




    render() {
        return (
            <div className={style.wrap}>
                <div className="search friends__search">
                    <input type="text" placeholder={"Поиск"}/>
                </div>

                <div className={style.friends}>


                    {this.props.friends.map((friend) => {
                        return <Friend key={friend.id} id={friend.id} userName={friend.name} userInfo={friend.status}
                                       followed={friend.followed} avatar={friend.photos} follow={this.props.follow}
                                       unfollow={this.props.unfollow}></Friend>
                    })}
                </div>
            </div>
        );
    }
}

export default Friends;