import React from "react";

import "./App.css";
import state, {addPost} from "./redux/state";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state, addPost)