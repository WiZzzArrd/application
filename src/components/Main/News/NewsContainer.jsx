import Posts from "./Posts/Posts";
import style from "./content.module.css";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/news-reducer";
import StoreContext from "../../../storeContext";

function NewsContainer() {

    return (

        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState();

                const addPostHandler = (text) => {
                    store.dispatch(addPostActionCreator(text))
                    store.dispatch(changePostTextActionCreator(""))
                }

                const changeInputHandler = (text) => {
                    store.dispatch(changePostTextActionCreator(text))
                }
            return (
            <div className={style.content}>
            <Posts updatePostText = {changeInputHandler}
            addPost = {addPostHandler}
            postItems =  {state.newsReducer.postItems} postText={state.newsReducer.postText}></Posts>
            </div>
            )
        }}
        </StoreContext.Consumer>
    );
}

export default NewsContainer;
