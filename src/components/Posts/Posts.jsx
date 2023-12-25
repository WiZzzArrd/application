import Post from "./Post";
import style from "./Posts.module.css";

function Posts() {
  return (
    <div>
      <div className={style.form}>
        <input type='text' placeholder='Что нового?' />
        <button>Опубликовать</button>
      </div>

      <Post message='Всем привет' like='10' comment='45'></Post>
      <Post message='Всем пока' like='30' comment='5'></Post>
      <Post message='Программмист - это весело' like='0' comment='0'></Post>
      <Post message='...' like='1000' comment='450'></Post>
    </div>
  );
}

export default Posts;
