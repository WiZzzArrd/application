import React from "react";
import style from "./index.module.css";
import Header from "./components/Header/Header";

import Main from "./components/Main/Main";

function App(props) {
    console.log(props)

    return (
    <div className={style.app}>
      <div className={style.wrapper}>
        <Header></Header>
        <Main postsData= {props?.state?.news}
              dialogsData={props?.state?.messages}
              friendsData = {props?.state?.friends}
              addPost = {props?.addPost}
              changePostInput = {props.changePostInput}
        ></Main>
      </div>
    </div>
  );
}

export default App;
