import Post from "./Post/Post";
import style from "./Posts.module.css";
import {useRef} from "react";




function Posts({news, updatePostText, addPost}) {
    let postData = ""



    if(!news.postItems){
        postData = <p>Тут пока нет постов...</p>
    }else{
        postData = news.postItems.map((item)=>{
            return <Post key = {item.id} likeCount = {item.likeCount} comment={item.comment} message={item.message}></Post>
        })
    }

let inputRef  = useRef()

    function onPostChange(){
        updatePostText(inputRef.current.value)
    }

    function onAddPost(){
        addPost(inputRef.current.value)
    }


    return (
        <section className={style.content}>
            <div  className={style.form}>
                <input ref={inputRef} type='text' placeholder='Что нового?'
                    value={news.postText}
                       onChange={onPostChange}
                />
                <button onClick={onAddPost}>Опубликовать</button>
            </div>

            {postData}
        </section>
    );
}

export default Posts;
