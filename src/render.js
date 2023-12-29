import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export let rerenderEntireTree = (state, addPost)=> {



    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state = {state} addPost = {addPost} />
            </BrowserRouter>
        </React.StrictMode>
    );

}

rerenderEntireTree()