import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_IS_PAGES_LOADING = "SET-IS-PAGES-LOADING";
const SET_IS_FRIENDS_LOADING = "SET-IS-FRIENDS-LOADING";
const SET_FOLLOWING_IN_PROGRESS = "SET-FOLLOWING-IN-PROGRESS"

let initialState = {
    friendsItems: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isPagesLoading: false,
    isFriendsLoading: false,
    followingInProgress: [],
}

export const followSuccess = (userId) => ({type: FOLLOW,userId})

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})

export const setFriends = (friends) => ({type: SET_FRIENDS,friends})

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE,page})

export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})

export const setIsPagesLoading = (flag) => ({type: SET_IS_PAGES_LOADING, flag})

export const setIsFriendsLoading = (flag) => ({type: SET_IS_FRIENDS_LOADING,flag})

export const setFollowingInProgress = (isLoading, id) => ({type: SET_FOLLOWING_IN_PROGRESS,isLoading,  id})


export const getFriends = (currentPage, pageSize) => {

    return (dispatch)=> {

        try {
            dispatch(setIsFriendsLoading(true))
            dispatch(setIsPagesLoading(true))

            usersAPI.getUsers(currentPage, pageSize).then((data) => {

                dispatch(setFriends(data.items))
                dispatch(setCurrentPage(currentPage))
                dispatch(setTotalCount(data.totalCount))
            }).finally(() => {
                dispatch(setIsFriendsLoading(false))
                dispatch(setIsPagesLoading(false))
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const follow = ( id)=>{
    return (dispatch)=>{
        dispatch(setFollowingInProgress(true, id))
        usersAPI.postFollow(id).then((response) => {
            if (response.resultCode === 0) {
                console.log("Добавлен в друзья")
                dispatch(followSuccess(id))
            }
        }).finally(() => {
            dispatch(setFollowingInProgress(false, id))
        })
    }
}

export const unfollow = (id)=>{
    return (dispatch)=>{
        dispatch(setFollowingInProgress(true, id))
        usersAPI.deleteFollow(id).then((response) => {
            if (response.resultCode === 0) {
                console.log("Удален из друзей")
                dispatch(unfollowSuccess(id))
            }
        }).catch(() => console.error("При удалении произошла ошибка")).finally(() => {
            dispatch(setFollowingInProgress(false, id))
        })
    }
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW : {
            let stateCopy = {
                ...state, friendsItems: state.friendsItems.map((friend) => {
                    if (friend.id === action.userId) {
                        return {...friend, followed: true}
                    }

                    return friend
                })
            }

            return stateCopy;
        }

        case  UNFOLLOW: {
            let stateCopy = {
                ...state, friendsItems: state.friendsItems.map((friend) => {
                    if (friend.id === action.userId) {
                        return {...friend, followed: false}
                    }

                    return friend
                })
            }

            return stateCopy;
        }

        case SET_FRIENDS: {
            return {...state, friendsItems: action.friends}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }

        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.count / 100}
        }

        case SET_IS_PAGES_LOADING: {
            return {...state, isPagesLoading: action.flag,}
        }

        case SET_IS_FRIENDS_LOADING: {
            return {
                ...state,
                isFriendsLoading: action.flag,
            }
        }

        case SET_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isLoading ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(uId => uId !== action.id)
            }
        }

        default: {
            return state;
        }

    }

}

export default friendsReducer;