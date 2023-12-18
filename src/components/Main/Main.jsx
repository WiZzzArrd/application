import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import style from "./main.module.css";

function Main() {
  return (
    <main className={style.main}>
      <Sidebar></Sidebar>
      <Content></Content>
    </main>
  );
}

export default Main;
