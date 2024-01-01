export let store = {
    _state: {
        news: {
            postItems: [{
                id: 1, message: 'Всем привет', likeCount: "10", comment: "4",
            }, {
                id: 2, message: 'Всем пока', likeCount: "100", comment: "45",
            }, {
                id: 3, message: 'Всем привет', likeCount: "10", comment: 35,
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

    dispatch({type, payload}) {
        if (type === "ADD-POST") {
            let postsLength = this._state.news.postItems.length - 1

            let postItem = {
                id: this._state.news.postItems[postsLength].id + 1,
                message: payload.post.message || "...",
                likeCount: payload.post?.likeCount || 0,
                comment: payload.post?.comment || 0,
            }

            this._state.news.postItems.push(postItem);
            this._subscriber(this._state);

        } else if (type === "CHANGE-POST-TEXT") {
            this._state.news.postText = payload.text;
            this._subscriber(this._state);
        } else if (type === "ADD-MESSAGE") {



            let messagesLength = this._state.messages.chatItems.length - 1;

            let newMessage = {
                id: this._state.messages.chatItems[messagesLength].id + 1,
                message: payload.message,
            }

            this._state.messages.chatItems.push(newMessage)

            this._subscriber(this._state)
        } else if (type === "UPDATE-MESSAGE") {
            this._state.messages.chatText = payload.text;

            this._subscriber(this._state);
        }
    }
}

window.store = store;



