import Post from "./Post/Post";
import style from "./Posts.module.css";
import {useRef} from "react";




function Posts({postItems, postText, addPost, updatePostText}) {
    let postData = ""

    if(!postItems){
        postData = <p>Тут пока нет постов...</p>
    }else{
        postData = postItems.map((item)=>{
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
        <div>
            <div  className={style.form}>
                <input ref={inputRef} type='text' placeholder='Что нового?'
                    value={postText}
                       onChange={onPostChange}
                />
                <button onClick={onAddPost}>Опубликовать</button>
            </div>

            {postData}
        </div>
    );
}

export default Posts;
