import {connect} from "react-redux";
import {followAC, setFriendsAC, unfollowAC} from "../../../redux/friends-reducer";
import Friends from "./Friends.jsx"

let mapStateToProps = (state)=>{
    return {
        friends: state.friends.friendsItems
    }
}

let mapStateToDispatch = (dispatch)=>{
    return {
        follow: (userId)=> dispatch(followAC(userId)),
        unfollow: (userId)=> dispatch(unfollowAC(userId)),
        setFriends: (friends)=> dispatch(setFriendsAC(friends)),
    }
}



let FriendsContainer = connect(mapStateToProps, mapStateToDispatch)(Friends);

export default  FriendsContainer;