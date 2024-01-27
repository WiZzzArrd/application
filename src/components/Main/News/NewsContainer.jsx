import Posts from "./Posts/Posts";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/news-reducer";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        news: state.news,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch)=>{
    return {
        updatePostText: (text)=>{
            dispatch(changePostTextActionCreator(text))
        },
        addPost: (text)=>{
            dispatch(addPostActionCreator(text))
        },
    }
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default NewsContainer;
