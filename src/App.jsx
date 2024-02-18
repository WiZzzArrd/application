import React from "react";
import style from "./index.module.css";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {appInitializing} from "./redux/app-reducer";
import Loader from "./UI/Loader/Loader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";



class App extends React.Component {

    componentDidMount() {
        this.props.appInitializing()
    }

    render() {

        if(!this.props.initialized){
            return <Loader></Loader>
        }

        return (
            <div className={style.app}>
                <div className={style.wrapper}>
                    <HeaderContainer/>
                    <Main></Main>
                </div>
            </div>
        );
    }
}


const mapStateTProps = (state)=>{
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter, connect(mapStateTProps, {
    appInitializing
}))(App);
