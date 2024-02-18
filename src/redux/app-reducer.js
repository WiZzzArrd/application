import {getAuth} from "./auth-reducer";

const SET_INITIALIZE = "SET-INITIALIZE"


const initialState = {
    initialized: false
}


export const setInitialize = () => {
    return {
        type: SET_INITIALIZE,
    }
}


export const appInitializing = ()=> (dispatch)=>{
  let promise = dispatch(getAuth())

    Promise.all([promise]).then(()=>{
        dispatch(setInitialize())
    })
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true,

            }
        default:
            return state
    }
}




