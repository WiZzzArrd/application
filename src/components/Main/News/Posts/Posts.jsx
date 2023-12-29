import Post from "./Post/Post";
import style from "./Posts.module.css";
import {useRef} from "react";

function Posts({postItems, addPost}) {

let inputRef  = useRef()

    const addPostHandler = ()=>{
        addPost({message: inputRef.current.value})
        inputRef.current.value = ""
    }

    return (
        <div>
            <div className={style.form}>
                <input ref={inputRef} type='text' placeholder='Что нового?'/>
                <button onClick={addPostHandler}>Опубликовать</button>
            </div>

            {postItems.map((item)=>{
                return <Post key = {item.id} likeCount = {item.likeCount} comment={item.comment} message={item.message}></Post>
            })}
        </div>
    );
}

export default Posts;
