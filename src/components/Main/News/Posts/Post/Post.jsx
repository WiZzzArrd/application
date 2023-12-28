import style from "./Post.module.css";
import likeIcon from "../../../../../assets/icons/like.svg";
import commentIcon from "../../../../../assets/icons/comment.svg";

function Post({ message, likeCount, comment }) {
  return (
    <div className={style.post}>
      <div className={style.content}>
        <p>{message || "что то"}</p>
      </div>
      <div className={style.likeComment}>
        <div className={style.like}>
          <img src={`${likeIcon}`} alt='like' />
          <span>{likeCount || 0}</span>
        </div>

        <div className={style.comment}>
          <img src={commentIcon} alt='comment' />
          <span>{comment || 0}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
