import React from "react";
import style from "./index.module.css";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {

    return (
    <div className={style.app}>
      <div className={style.wrapper}>
       <HeaderContainer/>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
