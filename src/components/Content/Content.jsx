import Posts from "../Posts/Posts";
import style from "./content.module.css";

function Content() {
  return (
    <div className={style.content}>
      <Posts></Posts>
    </div>
  );
}

export default Content;
