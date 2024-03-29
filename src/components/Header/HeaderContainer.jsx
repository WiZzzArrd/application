import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    render() {

        return (
            <Header {...this.props}/>
        );
    }
}


let mapStateToProps = (state)=>{
    return {
        isLoading: state.auth.isLoading,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}





export default  connect(mapStateToProps, {
    logout
})(HeaderContainer);