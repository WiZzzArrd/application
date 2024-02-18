import {connect} from "react-redux";
import React, {Component} from 'react';
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../../redux/profile-reducer";
import {compose} from "redux";



class ProfileAPIContainer extends Component {



    componentDidMount() {

        let userId = this.props.match.params.userId;

            if(!userId){
                userId = this.props.userId;

                if(!userId){
                    this.props.history.push("/login")
                    return
                }
            }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }


    render() {

        return (
            <Profile {...this.props}></Profile>
        );
    }
}

let mapStateToProps = (state)=>{
    return {
        profile: state.profile,
        status: state.profile.status,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}



let ProfileContainer = compose(connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
}))(ProfileAPIContainer)





export default ProfileContainer;