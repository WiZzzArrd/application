import React from "react";
import style from "./index.module.css";
import Header from "./components/Header/Header";

import Main from "./components/Main/Main";


function App({state, store}) {

    return (
    <div className={style.app}>
      <div className={style.wrapper}>
        <Header></Header>
        <Main postsData= {state.newsReducer}
              dialogsData={state.messagesReducer}
              friendsData = {state.friendsReducer}
              dispatch = {store.dispatch.bind(store)}
        ></Main>
      </div>
    </div>
  );
}

export default App;
