export const ADD_POST = "ADD-POST";

export const addPostActionCreator = (message) => {

    return {
        type: ADD_POST,
        post: {
            message: message
        }
    }
}

let initialState = {
    postItems: [{
        id: 1, message: 'Всем привет', likeCount: "10", comment: "4",
    }, {
        id: 2, message: 'Всем пока', likeCount: "100", comment: "45",
    }, {
        id: 3, message: 'Всем привет', likeCount: "10", comment: "35",
    }],
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let postsLength = state.postItems.length - 1

            let postItem = {
                id: state.postItems[postsLength].id + 1 || 0,
                message: action.post.message || "...",
                likeCount: action.post?.likeCount || 0,
                comment: action.post?.comment || 0,
            }

            return  {...state, postItems: [...state.postItems, postItem]}

        }
        default : {
            return state;
        }
    }


}

export default newsReducer;