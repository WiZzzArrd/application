import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import newsReducer from "./news-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import {thunk} from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducersBatch = combineReducers({
    news: newsReducer,
    messages: messagesReducer,
    friends: friendsReducer,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer,
});

export let store = legacy_createStore(reducersBatch, applyMiddleware(thunk));


window.store = store.getState();


export default  store;