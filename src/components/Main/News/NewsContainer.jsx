import Posts from "./Posts/Posts";
import style from "./content.module.css";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/news-reducer";

function NewsContainer({postItems, dispatch, postText}) {


    const addPostHandler = (text)=>{
        dispatch(addPostActionCreator(text))
        dispatch(changePostTextActionCreator(""))
    }

    const changeInputHandler = (text)=>{
        dispatch(changePostTextActionCreator(text))
    }



  return (
    <div className={style.content}>
      <Posts updatePostText = {changeInputHandler}
             addPost = {addPostHandler}
             postItems =  {postItems} postText={postText}></Posts>
    </div>
  );
}

export default NewsContainer;
