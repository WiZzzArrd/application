import {connect} from "react-redux";
import {
    setFollowingInProgress,
    getFriends
} from "../../../redux/friends-reducer";
import React, {Component} from "react";
import Friends from "./Friends";
import {follow, unfollow} from "../../../redux/friends-reducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



class FriendsAPIComponent extends Component {


    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }


    onChangePage = (page) => {
        this.props.getFriends(page, this.props.pageSize);
    }


    render() {

        return (
            <Friends onChangePage={this.onChangePage} friends={this.props.friends} follow={this.props.follow}
                     currentPage={this.props.currentPage}
                     unfollow={this.props.unfollow}
                     totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                     isPagesLoading={this.props.isPagesLoading}
                     isFriendsLoading={this.props.isFriendsLoading}
                     followingInProgress={this.props.followingInProgress}
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



let FriendsContainer = compose(connect(mapStateToProps, {
    follow,
    setFollowingInProgress,
    unfollow,
    getFriends,
}), withAuthRedirect)(FriendsAPIComponent)




export default FriendsContainer;