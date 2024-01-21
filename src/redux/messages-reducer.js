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

let initialState = {
    dialogItems: [
        {id: 1, name: "Вася"},
        {id: 2, name: "Игорь"},
        {id: 3, name: "Настя"},
        {id: 4, name: "Маша"}
    ], chatItems: [
        {id: 1, message: "hello"},
        {id: 2, message: "how are you"},
        {id: 3, message: "ok, have a good day"},
        {id: 4, message: ":)"},
    ],
    chatText: "",
}


 const messagesReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_MESSAGE: {
            let messagesLength = state.chatItems.length - 1;

            let newMessage = {
                id: state.chatItems[messagesLength].id + 1 || 0,
                message: action.message,
            }


           return  {...state, chatItems: [...state.chatItems, newMessage], chatText: ""};

        }
        case UPDATE_MESSAGE: {
            return {...state, chatText: action.text };

        }
        default : {
            return  state
        }
    }

}

export default  messagesReducer;