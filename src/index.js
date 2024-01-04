import React from "react";
import "./App.css";
import StoreContext from "./storeContext";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = () => {


    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)