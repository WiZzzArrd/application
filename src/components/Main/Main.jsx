import NewsContainer from "./News/NewsContainer";
import Sidebar from "./Sidebar/Sidebar";
import style from "./main.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import {Route,  Switch} from "react-router-dom";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import FriendsContainer from "./Friends/FriendsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../../Pages/Login/Login";


function Main() {


  return (
    <main className={style.main}>
      <Sidebar></Sidebar>

        <Switch>
            <Route exact path = "/" render = {()=> <NewsContainer/> }></Route>

            <Route exact path = "/news" render = {()=> <NewsContainer/> }></Route>

            <Route  path = "/messages" render = {()=> <DialogsContainer/>}></Route>

            <Route   path = "/profile/:userId?" component = {ProfileContainer}></Route>

            <Route path = "/login" component = {Login}></Route>

            <Route exact path = "/settings" component = {Settings}></Route>

            <Route exact path = "/music" component = {Music}></Route>

            <Route exact path = "/friends" render = {()=> <FriendsContainer />}></Route>
        </Switch>

    </main>
  );
}

export default Main;
