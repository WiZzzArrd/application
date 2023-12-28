

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
}

export default  state;