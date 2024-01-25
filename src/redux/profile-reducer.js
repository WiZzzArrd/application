import {usersAPI} from "../api/api";

const SET_FRIEND_PROFILE = "SET-FRIEND-PROFILE";
const SET_IS_PROFILE_LOADING = "SET-IS-PROFILE-LOADING";

const initialState = {
    info: {
        aboutMe: "",
        contacts: {
            facebook: null,
            vk: null,
            twitter: null,
            github: null,
        },
        photos: {
            small: null,
            large: null,
        },
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: null,
    },
    isProfileLoading: true,

}

export const setFriendProfile = (profile) => {
    return {type: SET_FRIEND_PROFILE, profile}

}

export const setIsProfileLoading = (flag) => {
    return {type: SET_IS_PROFILE_LOADING, flag}
}


export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setIsProfileLoading(true))

        usersAPI.getProfile(userId).then((data) => {
            dispatch(setFriendProfile(data))
        }).catch((e) => {
            console.log(e)
        }).finally(() => {
            dispatch(setIsProfileLoading(false))
        })
    }
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {


        case SET_FRIEND_PROFILE: {
            return {...state, info: {...action.profile}}
        }

        case SET_IS_PROFILE_LOADING: {
            return {...state, isProfileLoading: action.flag}
        }

        default: {
            return state;
        }
    }
}
