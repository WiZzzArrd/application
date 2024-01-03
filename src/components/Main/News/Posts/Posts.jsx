import Post from "./Post/Post";
import style from "./Posts.module.css";
import {useRef} from "react";
import {addPostActionCreator, changePostTextActionCreator} from "../../../../redux/news-reducer";



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
        dispatch(addPostActionCreator(inputRef.current.value))
        dispatch(changePostTextActionCreator(""))
    }

    const changeInputHandler = ()=>{
        dispatch(changePostTextActionCreator(inputRef.current.value))
    }

    return (
        <div>
            <div  className={style.form}>
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
