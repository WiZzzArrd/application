const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_IS_PAGES_LOADING = "SET-IS-PAGES-LOADING";
const SET_IS_FRIENDS_LOADING = "SET-IS-FRIENDS-LOADING";

let initialState = {
    friendsItems: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isPagesLoading: false,
    isFriendsLoading: false,
}

export const follow = (userId)=>{
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId)=>{
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setFriends = (friends)=>{
    return {
        type: SET_FRIENDS,
        friends,
    }
}

export const setCurrentPage = (page)=>{
    return {
        type: SET_CURRENT_PAGE,
        page,
    }
}

export const setTotalCount = (count)=>{
    return {
        type: SET_TOTAL_COUNT,
        count,
    }
}

export const setIsPagesLoading = (flag)=>{
    return {
        type: SET_IS_PAGES_LOADING,
        flag,
    }
}

export const setIsFriendsLoading= (flag)=>{
    return {
        type: SET_IS_FRIENDS_LOADING,
        flag,
    }
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW : {
            let stateCopy = {...state, friendsItems: state.friendsItems.map((friend)=>{
                if(friend.id === action.userId){
                    return {...friend, followed: true}
                }

                return friend
            })
            }

            return stateCopy;
        }

        case  UNFOLLOW: {
            let stateCopy = {...state, friendsItems: state.friendsItems.map((friend)=>{
                    if(friend.id === action.userId){
                        return {...friend, followed: false}
                    }

                    return friend
                })
            }

            return stateCopy;
        }

        case SET_FRIENDS: {
            return {...state, friendsItems:action.friends}
            break
        }

        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.page}
        }

        case SET_TOTAL_COUNT:{
            return  {...state, totalCount: action.count /100}
        }

        case SET_IS_PAGES_LOADING:{
            return {...state, isPagesLoading: action.flag, }
        }

        case SET_IS_FRIENDS_LOADING:{
            return {
                ...state,
                isFriendsLoading: action.flag,
            }
        }

        default: {
            return state;
        }

    }

}

export default friendsReducer;