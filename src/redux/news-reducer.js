export const ADD_POST = "ADD-POST";
export const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";


export const  addPostActionCreator = (message)=>{

    return {
        type: ADD_POST,
        post: {
            message: message
        }

    }
}


export const  changePostTextActionCreator = (text)=>{

    return {
        type: CHANGE_POST_TEXT,
        text: text
    }
}


const newsReducer = (state, action)=>{
    switch (action.type) {
        case ADD_POST:
            let postsLength = state.postItems.length - 1

            let postItem = {
                id: state.postItems[postsLength].id + 1,
                message: action.post.message || "...",
                likeCount: action.post?.likeCount || 0,
                comment: action.post?.comment || 0,
            }

            state.postItems.push(postItem);
            state.postText = "";
            break;
        case CHANGE_POST_TEXT:
            state.postText = action.text;
            break;
    }

    return state
}

export default newsReducer;