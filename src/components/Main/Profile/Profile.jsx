import React from 'react';
import style from "./profile.module.css";
import user from "../../../assets/users/1.png"
import Loader from "../../../UI/Loader/Loader";
import Resume from "./Resume/Resume";
import Contacts from "./Contacts/Contacts";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {


    if(props.profile.isProfileLoading){
        return ( <div className={style.loader}> <Loader ></Loader></div>)
    }


    return (

        <section className={style.profile}>
                <div className={style.about}>
                <div className={style.avatar}>
                    <img src={props.profile.info.photos.small || user} alt="user"/>
                </div>
                <div className={style.info}>
                    <p>{props.profile.info.fullName || "No Name"}</p>
                    <ProfileStatus updateStatus = {props.updateStatus} status = {props.status } aboutMe = {props.profile.info.aboutMe}
                    />
                </div>
            </div>
            <div className={style.infoblock}>
                <Contacts {...props}/>
                <Resume {...props}/>
            </div>
        </section>
    );
};

export default Profile;