import Posts from "./Posts/Posts";
import style from "./content.module.css";

function News({postItems, dispatch, postText}) {



  return (
    <div className={style.content}>
      <Posts dispatch = {dispatch} postItems =  {postItems} postText={postText}></Posts>
    </div>
  );
}

export default News;
