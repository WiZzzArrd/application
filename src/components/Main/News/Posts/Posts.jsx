import Post from "./Post/Post";
import style from "./Posts.module.css";
import {useRef} from "react";

function Posts({postItems, dispatch, postText}) {



    let postData = ""

    if(!postItems){
        postData = <p>Тут пока нет постов...</p>
    }else{
        postData = postItems.map((item)=>{
            return <Post key = {item.id} likeCount = {item.likeCount} comment={item.comment} message={item.message}></Post>
        })
    }

let inputRef  = useRef()

    const addPostHandler = ()=>{

        dispatch({type: "ADD-POST", payload: {post: {message: inputRef.current.value}}})

        dispatch({type: "CHANGE-POST-TEXT", payload: {text: ""}})
    }

    const changeInputHandler = ()=>{

        dispatch({type: "CHANGE-POST-TEXT", payload: {text: inputRef.current.value}})

    }

    return (
        <div>
            <div className={style.form}>
                <input ref={inputRef} type='text' placeholder='Что нового?'
                    value={postText}
                       onChange={changeInputHandler}
                />
                <button onClick={addPostHandler}>Опубликовать</button>
            </div>

            {postData}
        </div>
    );
}

export default Posts;
