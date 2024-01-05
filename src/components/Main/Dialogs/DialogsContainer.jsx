import React from 'react';
import style from "./dialogs.module.css";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/messages-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let mapStateToProps = (state)=>{
    return {
        messages: state.messages
    }
}
let mapStateToDispatch = (dispatch)=>{
    return {
        addMessage: (message)=> dispatch(addMessageActionCreator(message)),
        changeMessage: (text)=> dispatch(updateMessageActionCreator(text))
    }
}


let DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(Dialogs)

export default DialogsContainer;