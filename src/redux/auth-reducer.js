import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_IS_PAGE_LOADING = "SET-IS-PAGE-LOADING";
const SET_USER_DATA = "SET-USER-DATA"


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false,
}


export const setIsPageLoading = (flag) => ({type: SET_IS_PAGE_LOADING, flag})

export const setUserData =  (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, data: {
        userId,
        email,
        login,
        isAuth,
    },
})


export const getAuth = () => {
    return (dispatch) => {
        dispatch(setIsPageLoading(true))
        return authAPI.me().then((response) => {
            if (response.resultCode === 0) {
                const {email, login, id} = response.data;
                dispatch(setUserData(id, email, login, true))
            }
        }).finally(()=>{
            dispatch(setIsPageLoading(false))
        }).catch(()=>{
            console.log("при загрузке произошла ошибка")
        })
    }
}

export const login =  (email, password, rememberMe) => (dispatch) =>{

    authAPI.login(email, password, rememberMe).then(response =>{
        if(response.data.resultCode === 0){
            dispatch(getAuth())
        }else{

            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"

            dispatch(stopSubmit("login", {_error: message}))
        }
    })
}

export const logout = ()=> (dispatch)=>{
    authAPI.logout().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setUserData(null,  null, null, false))
        }
    })
}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case  SET_IS_PAGE_LOADING: {
            return {
                ...state,
                isLoading: action.flag,
            }
        }

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }


        default: {
            return state
        }

    }
}
