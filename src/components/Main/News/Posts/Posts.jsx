import Post from "./Post/Post";
import style from "./Posts.module.css";

function Posts({postItems}) {



    return (
        <div>
            <div className={style.form}>
                <input type='text' placeholder='Что нового?'/>
                <button>Опубликовать</button>
            </div>

            {postItems.map((item)=>{
                return <Post key = {item.id} likeCount = {item.likeCount} comment={item.comment} message={item.message}></Post>
            })}
        </div>
    );
}

export default Posts;
