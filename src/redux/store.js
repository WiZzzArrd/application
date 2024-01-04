import newsReducer from "./news-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";





 let store = {

    _state: {
        news: {
            postItems: [{
                id: 1, message: 'Всем привет', likeCount: "10", comment: "4",
            }, {
                id: 2, message: 'Всем пока', likeCount: "100", comment: "45",
            }, {
                id: 3, message: 'Всем привет', likeCount: "10", comment: "35",
            }],
            postText: "",
        },

        messages: {
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
        },

        friends: {
            friendsItems: [{id: 1, userName: "Иван Горин"}, {id: 2, userName: "Юля Соколова"}, {
                id: 3,
                userName: "Анастасия Калачева"
            }, {id: 4, userName: "No Nammme"}, {id: 5, userName: "Wizzard RrR"}]
        }
    },

    _subscriber() {
        console.log("no subscribers")
    },

    subscribe(observer) {
        this._subscriber = observer;
        this._subscriber()
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.news = newsReducer(this._state.news, action)
        this._state.messages = messagesReducer(this._state.messages, action)
        this._state.friends = friendsReducer(this._state.friends, action)

        this._subscriber(this._state);
    }
};






