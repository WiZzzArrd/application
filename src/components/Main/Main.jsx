import News from "./News/News";
import Sidebar from "./Sidebar/Sidebar";
import style from "./main.module.css";
import Dialogs from "./Dialogs/Dialogs";
import {Route,  Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";

function Main({postsData,dialogsData}) {





  return (
    <main className={style.main}>
      <Sidebar></Sidebar>

        <Switch>
            <Route exact path = "/news" render = {()=> <News postItems = {postsData.postItems}> </News> }></Route>
            <Route  path = "/messages" render = {()=> <Dialogs dialogItems = {dialogsData.dialogItems} chatItems = {dialogsData.chatItems}/>}></Route>
            <Route exact path = "/profile" component = {Profile}></Route>
            <Route exact path = "/settings" component = {Settings}></Route>
            <Route exact path = "/music" component = {Music}></Route>
        </Switch>

    </main>
  );
}

export default Main;
