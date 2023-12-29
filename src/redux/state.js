import {rerenderEntireTree} from "../render";


let state = {
    news: {postItems: [{
        id: 1, message: 'Всем привет', likeCount: "10", comment: "4",
    }, {
            id: 2, message: 'Всем пока', likeCount: "100", comment: "45",
        },  {
            id: 3, message: 'Всем привет', likeCount: "10", comment: 35,
        }]},

    messages: {dialogItems: [
        {id: 1, name: "Вася"},
        {id: 2, name: "Игорь"},
        {id: 3, name: "Настя"},
        {id: 4, name: "Маша"}
    ], chatItems: [
        {id: 1, message: "hello"},
        {id: 2, message: "how are you"},
        {id: 3, message: "ok, have a good day"},
        {id: 4, message: ":)"},
    ]},

    friends: {friendsItems:[{id: 1, userName: "Иван Горин" }, {id: 2, userName:  "Юля Соколова"}, {id:3, userName: "Анастасия Калачева"}, {id:4, userName: "No Nammme"}, {id:5, userName: "Wizzard RrR"}]}
}



export let addPost = (post) =>{

    let postsLength = state.news.postItems.length - 1

    let postItem = {
        id: state.news.postItems[postsLength].id + 1,
        message: post.message,
        likeCount: post.likeCount || 0,
        comment: post.comment || 0,
    }

    state.news.postItems.push(postItem)
    rerenderEntireTree(state, addPost)
}





export default  state;