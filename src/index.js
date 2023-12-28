import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state = {state}/>
        </BrowserRouter>
    </React.StrictMode>
);
