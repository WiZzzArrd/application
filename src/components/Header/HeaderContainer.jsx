import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setIsPageLoading, setUserData} from "../../redux/auth-reducer";
import {getAuth} from "../../api/api";

class HeaderContainer extends Component {


    componentDidMount() {
        getAuth().then((response)=>{
            if(response.resultCode === 0){
                const {email, id:userId, login} = response.data;


                this.props.setUserData(userId, email, login)
            }
        })
    }


    render() {

        return (
            <Header {...this.props}/>
        );
    }
}


let mapStateToProps = (state)=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}



export default  connect(mapStateToProps, {
    setUserData,
    setIsPageLoading
})(HeaderContainer);