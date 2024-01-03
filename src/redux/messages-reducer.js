export const UPDATE_MESSAGE = "UPDATE-MESSAGE";
export const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessageActionCreator = (message)=>{

    return {
        type : ADD_MESSAGE,
        message: message
    }
}

export const updateMessageActionCreator = (text)=>{

    return {
        type: UPDATE_MESSAGE,
        text: text
    }
}


export const messagesReducer = (state, action)=>{
    switch (action.type) {
        case ADD_MESSAGE:
            let messagesLength = state.chatItems.length - 1;

            let newMessage = {
                id: state.chatItems[messagesLength].id + 1,
                message: action.message,
            }

            state.chatItems.push(newMessage)
            state.chatText = "";
            break;
        case UPDATE_MESSAGE:
            state.chatText = action.text;
            break;
    }

    return state
}

export default  messagesReducer;