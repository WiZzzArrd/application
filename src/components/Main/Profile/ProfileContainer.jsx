import {connect} from "react-redux";
import React, {Component} from 'react';
import Profile from "./Profile";
import {getProfile} from "../../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

class ProfileAPIContainer extends Component {

    componentDidMount() {

            let userId = this.props.match.params.userId;

            if(!userId){
                userId = "2";
            }

            this.props.getProfile(userId)
    }


    render() {
        return (
            <Profile {...this.props}></Profile>
        );
    }
}



let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer)




let mapStateToProps = (state)=>{
    return {
        profile: state.profile,
    }
}






let withRouterComponent = withRouter(AuthRedirectComponent)


const ProfileContainer = connect(mapStateToProps, {
    getProfile,
})(withRouterComponent);


export default ProfileContainer;