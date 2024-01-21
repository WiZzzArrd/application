import {combineReducers, legacy_createStore} from "redux";
import newsReducer from "./news-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";


let reducersBatch = combineReducers({
    news: newsReducer,
    messages: messagesReducer,
    friends: friendsReducer,
    profile: profileReducer,
    auth: authReducer,
});

export let store = legacy_createStore(reducersBatch);


window.store = store.getState();


export default  store;