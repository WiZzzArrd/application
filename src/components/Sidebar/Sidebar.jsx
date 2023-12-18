import NavBar from "../Nav/NavBar";
import style from "./sidebar.module.css";

function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <NavBar></NavBar>
    </aside>
  );
}

export default Sidebar;
