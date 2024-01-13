import {connect} from "react-redux";
import React, {Component} from 'react';
import Profile from "./Profile";
import {setFriendProfile, setIsProfileLoading} from "../../../redux/profile-reducer";
import axios from "axios";
import { withRouter} from "react-router-dom";

class ProfileAPIContainer extends Component {




    componentDidMount() {

            let userId = this.props.match.params.userId;

            if(!userId){
                userId = "2";
            }

            this.props.setIsProfileLoading(true)

            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response)=>{




                this.props.setFriendProfile(response.data)

            }).catch((e)=>{
                console.log(e)
            }).finally(()=>{
                this.props.setIsProfileLoading(false)
            })
    }




    render() {

        console.log(this.props)

        return (
            <Profile {...this.props}></Profile>
        );
    }
}


let mapStateToProps = (state)=>{
    return {
        profile: state.profile
    }
}


let withRouterComponent = withRouter(ProfileAPIContainer)


const ProfileContainer = connect(mapStateToProps, {
    setFriendProfile,
    setIsProfileLoading,
})(withRouterComponent);


export default ProfileContainer;