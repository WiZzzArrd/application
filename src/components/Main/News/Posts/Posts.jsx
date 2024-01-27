import Post from "./Post/Post";
import style from "./Posts.module.css";
import {useRef} from "react";




function Posts({news, updatePostText, addPost, isAuth}) {


    let formData = "";
    let postData = "";
    let inputRef  = useRef();

    if(isAuth){

     formData=   <div  className={style.form}>
            <input ref={inputRef} type='text' placeholder='Что нового?'
                   value={news.postText}
                   onChange={onPostChange}
            />
            <button onClick={onAddPost}>Опубликовать</button>
        </div>
    }


    if(!news.postItems){
        postData = <p>Тут пока нет постов...</p>
    }else{
        postData = news.postItems.map((item)=>{
            return <Post key = {item.id} likeCount = {item.likeCount} comment={item.comment} message={item.message}></Post>
        })
    }



    function onPostChange(){
        updatePostText(inputRef.current.value)
    }

    function onAddPost(){
        addPost(inputRef.current.value)
    }


    return (
        <section className={style.content}>
            {formData}
            {postData}
        </section>
    );
}

export default Posts;
