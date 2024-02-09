import Posts from "./Posts/Posts";
import {addPostActionCreator} from "../../../redux/news-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        news: state.news,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch)=>{
    return {
        addPost: (text)=>{
            dispatch(addPostActionCreator(text))
        },
    }
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default NewsContainer;
