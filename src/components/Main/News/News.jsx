import Posts from "./Posts/Posts";
import style from "./content.module.css";

function News({postItems, addPost, changePostInput}) {
  return (
    <div className={style.content}>
      <Posts changePostInput = {changePostInput} addPost = {addPost} postItems =  {postItems}></Posts>
    </div>
  );
}

export default News;
