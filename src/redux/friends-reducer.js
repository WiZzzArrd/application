
let initialState = {
    friendsItems: [{id: 1, userName: "Иван Горин"}, {id: 2, userName: "Юля Соколова"}, {
        id: 3,
        userName: "Анастасия Калачева"
    }, {id: 4, userName: "No Nammme"}, {id: 5, userName: "Wizzard RrR"}]
}


const friendsReducer = (state = initialState, action)=>{
    return state;
}

export default  friendsReducer;