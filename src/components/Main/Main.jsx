import NewsContainer from "./News/NewsContainer";
import Sidebar from "./Sidebar/Sidebar";
import style from "./main.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import {Route,  Switch} from "react-router-dom";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import Friends from "./Friends/Friends";


function Main({postsData,dialogsData, friendsData,dispatch }) {





  return (
    <main className={style.main}>
      <Sidebar></Sidebar>

        <Switch>


            <Route exact path = "/news" render = {()=> <NewsContainer postItems = {postsData?.postItems} postText = {postsData?.postText} dispatch = {dispatch}> </NewsContainer> }></Route>

            <Route  path = "/messages" render = {()=> <DialogsContainer dialogItems = {dialogsData?.dialogItems} chatItems = {dialogsData?.chatItems} dispatch = {dispatch} chatText = {dialogsData?.chatText}/>}></Route>

            <Route exact path = "/profile" component = {Profile}></Route>

            <Route exact path = "/settings" component = {Settings}></Route>

            <Route exact path = "/music" component = {Music}></Route>

            <Route exact path = "/friends" render = {()=> <Friends friendsItems = {friendsData?.friendsItems}/>}></Route>
        </Switch>

    </main>
  );
}

export default Main;
