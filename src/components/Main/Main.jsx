import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import style from "./main.module.css";
import Dialogs from "../Dialogs/Dialogs";
import {Route, Router, Switch} from "react-router-dom";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import Music from "../Music/Music";

function Main() {
  return (
    <main className={style.main}>
      <Sidebar></Sidebar>

        <Switch>
            <Route exact path = "/news" component = {Content}></Route>
            <Route exact path = "/messages" component = {Dialogs}></Route>
            <Route exact path = "/profile" component = {Profile}></Route>
            <Route exact path = "/settings" component = {Settings}></Route>
            <Route exact path = "/music" component = {Music}></Route>
        </Switch>

    </main>
  );
}

export default Main;
