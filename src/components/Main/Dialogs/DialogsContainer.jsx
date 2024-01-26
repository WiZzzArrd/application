import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/messages-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../../hoc/withAuthRedirect";


let mapStateToProps = (state)=>{
    return {
        messages: state.messages,
        isAuth: state.auth.isAuth,
    }
}
let mapStateToDispatch = (dispatch)=>{
    return {
        addMessage: (message)=> dispatch(addMessageActionCreator(message)),
        changeMessage: (text)=> dispatch(updateMessageActionCreator(text))
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)



let DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(AuthRedirectComponent)

export default DialogsContainer;