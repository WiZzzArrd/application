import React from "react";
import style from "./index.module.css";
import Header from "./components/Header/Header";

import Main from "./components/Main/Main";

function App() {


    return (
    <div className={style.app}>
      <div className={style.wrapper}>
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
