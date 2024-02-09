import Post from "./Post/Post";
import style from "./Posts.module.css";
import PostsForm from "./PostsForm";
import {reduxForm} from "redux-form";


function Posts({news, addPost, isAuth}) {


    let postData = "";
    let   PostsReduxForm = reduxForm({form: "posts"})(PostsForm)



    if(!news.postItems){
        postData = <p>Тут пока нет постов...</p>
    }else{
        postData = news.postItems.map((item)=>{
            return <Post key = {item.id} likeCount = {item.likeCount} comment={item.comment} message={item.message}></Post>
        })
    }

    function onAddPostHandler(props){
       if(props.post){
           addPost(props.post)
       }
    }


    return (
        <section className={style.content}>
            {isAuth && <PostsReduxForm  onSubmit={onAddPostHandler}  />}
            {postData}
        </section>
    );
}

export default Posts;
