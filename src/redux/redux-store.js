import {combineReducers, legacy_createStore} from "redux";
import newsReducer from "./news-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";


let reducersBatch = combineReducers({
    newsReducer: newsReducer,
    messagesReducer: messagesReducer,
    friendsReducer: friendsReducer,
});

export let store = legacy_createStore(reducersBatch);



export default  store;