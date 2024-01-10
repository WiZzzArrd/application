import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setFriendsAC, setTotalCountAC, unfollowAC} from "../../../redux/friends-reducer";
import React, {Component} from "react";
import axios from "axios";
import Friends from "./Friends";

class FriendsAPIComponent extends Component {


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {

            this.props.setFriends(response.data.items)


            this.props.setTotalCount(response.data.totalCount)
        })


    }


    onChangePage = (page) => {
        this.props.setCurrentPage(page)


        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.pageSize}`).then((response) => {

            this.props.setFriends(response.data.items)

        })
    }


    render() {


        return (
            <Friends onChangePage={this.onChangePage} friends={this.props.friends} follow={this.props.follow}
                     unfollow={this.props.unfollow} currentPage={this.props.currentPage}
                     totalCount={this.props.totalCount} pageSize={this.props.pageSize}></Friends>
        );
    }
}


let mapStateToProps = (state)=>{
    return {
        friends: state.friends.friendsItems,
        pageSize: state.friends.pageSize,
        totalCount: state.friends.totalCount,
        currentPage: state.friends.currentPage,
    }
}

let mapStateToDispatch = (dispatch)=>{
    return {
        follow: (userId)=> dispatch(followAC(userId)),
        unfollow: (userId)=> dispatch(unfollowAC(userId)),
        setFriends: (friends)=> dispatch(setFriendsAC(friends)),
        setCurrentPage: (page)=> dispatch(setCurrentPageAC(page)),
        setTotalCount: (count)=> dispatch(setTotalCountAC(count))
    }
}



let FriendsContainer = connect(mapStateToProps, mapStateToDispatch)(FriendsAPIComponent);

export default  FriendsContainer;