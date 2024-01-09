const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET-FRIENDS"

let initialState = {
    friendsItems: []
}

export const followAC = (userId)=>{
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId)=>{
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setFriendsAC = (friends)=>{
    return {
        type: SET_FRIENDS,
        friends,
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
            return {...state, friendsItems: [...state.friendsItems, ...action.friends]}
            break
        }

        default: {
            return state;
        }

    }

}

export default friendsReducer;