import React from 'react';
import {addMessageActionCreator} from "../../../redux/messages-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../../hoc/withAuthRedirect";


let mapStateToProps = (state)=>{
    return {
        messages: state.messages,
    }
}
let mapStateToDispatch = (dispatch)=>{
    return {
        addMessage: (message)=> dispatch(addMessageActionCreator(message)),
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)



let DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(AuthRedirectComponent)

export default DialogsContainer;