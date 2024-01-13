import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFriends, setIsFriendsLoading,
    setIsPagesLoading,
    setTotalCount,
    unfollow
} from "../../../redux/friends-reducer";
import React, {Component} from "react";
import axios from "axios";
import Friends from "./Friends";

class FriendsAPIComponent extends Component {


    componentDidMount() {
        try {
            this.props.setIsFriendsLoading(true)
            this.props.setIsPagesLoading(true)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {

                this.props.setFriends(response.data.items)

                this.props.setTotalCount(response.data.totalCount )
            }).finally(()=>{
                this.props.setIsFriendsLoading(false)
                this.props.setIsPagesLoading(false)
            })
        }
        catch (error){
            console.log(error)
        }
    }


    onChangePage = (page) => {
        this.props.setCurrentPage(page)

        try {
            this.props.setIsFriendsLoading(true)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.pageSize}`).then((response) => {

                this.props.setFriends(response.data.items)

            }).finally(() => this.props.setIsFriendsLoading(false))
        }
        catch (e) {
            console.log(e)
        }

    }


    render() {

        return (
            <Friends onChangePage={this.onChangePage} friends={this.props.friends} follow={this.props.follow}
                     unfollow={this.props.unfollow} currentPage={this.props.currentPage}
                     totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                     isPagesLoading = {this.props.isPagesLoading}
                     isFriendsLoading = {this.props.isFriendsLoading}
            >
            </Friends>
        );
    }
}


let mapStateToProps = (state)=>{
    return {
        friends: state.friends.friendsItems,
        pageSize: state.friends.pageSize,
        totalCount: state.friends.totalCount,
        currentPage: state.friends.currentPage,
        isPagesLoading: state.friends.isPagesLoading,
        isFriendsLoading: state.friends.isFriendsLoading,
    }
}


let FriendsContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setFriends,
    setCurrentPage,
    setTotalCount,
    setIsPagesLoading,
    setIsFriendsLoading,
})(FriendsAPIComponent);

export default  FriendsContainer;