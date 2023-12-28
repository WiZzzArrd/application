import Posts from "./Posts/Posts";
import style from "./content.module.css";

function News({postItems}) {
  return (
    <div className={style.content}>
      <Posts postItems =  {postItems}></Posts>
    </div>
  );
}

export default News;
