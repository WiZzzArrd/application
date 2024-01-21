const SET_IS_PAGE_LOADING = "SET-IS-PAGE-LOADING";
const SET_USER_DATA = "SET-USER-DATA"

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false,
}


export const setIsPageLoading = (flag)=>{
    return {
        type:SET_IS_PAGE_LOADING,
        flag,
    }
}

export const setUserData = (userId, email, login)=>{


    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        },

    }
}


export const authReducer = (state=initialState, action)=>{

    switch (action.type) {

        case  SET_IS_PAGE_LOADING: {
            return {
                ...state,
                isLoading: action.flag,
            }
        }

        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }


        default:{
            return state
        }

    }
}
