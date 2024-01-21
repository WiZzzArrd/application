import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFriends, setIsFriendsLoading,
    setIsPagesLoading,
    setTotalCount, setFollowingInProgress,
    unfollow
} from "../../../redux/friends-reducer";
import React, {Component} from "react";
import Friends from "./Friends";
import { usersAPI} from "../../../api/api";

class FriendsAPIComponent extends Component {


    componentDidMount() {
        try {
            this.props.setIsFriendsLoading(true)
            this.props.setIsPagesLoading(true)

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {

                this.props.setFriends(data.items)

                this.props.setTotalCount(data.totalCount)
            }).finally(() => {
                this.props.setIsFriendsLoading(false)
                this.props.setIsPagesLoading(false)
            })
        } catch (error) {
            console.log(error)
        }
    }


    onChangePage = (page) => {
        this.props.setCurrentPage(page)

        try {
            this.props.setIsFriendsLoading(true)

            usersAPI.getUsers(page, this.props.pageSize).then((data) => {

                this.props.setFriends(data.items)

            }).finally(() => this.props.setIsFriendsLoading(false))
        } catch (e) {
            console.log(e)
        }

    }


    render() {

        return (
            <Friends onChangePage={this.onChangePage} friends={this.props.friends} follow={this.props.follow}
                     unfollow={this.props.unfollow} currentPage={this.props.currentPage}
                     totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                     isPagesLoading={this.props.isPagesLoading}
                     isFriendsLoading={this.props.isFriendsLoading}
                     setFollowingInProgress = {this.props.setFollowingInProgress}
                     followingInProgress = {this.props.followingInProgress}
            >
            </Friends>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        friends: state.friends.friendsItems,
        pageSize: state.friends.pageSize,
        totalCount: state.friends.totalCount,
        currentPage: state.friends.currentPage,
        isPagesLoading: state.friends.isPagesLoading,
        isFriendsLoading: state.friends.isFriendsLoading,
        followingInProgress: state.friends.followingInProgress,
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
    setFollowingInProgress
})(FriendsAPIComponent);

export default FriendsContainer;