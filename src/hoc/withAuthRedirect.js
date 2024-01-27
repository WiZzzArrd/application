import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state)=>{
    return {
        isAuth: state.auth.isAuth,
    }
}
 function WithAuthRedirect(Component) {
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth){
                return <Redirect to = "/login"></Redirect>
            }
            return (
                <Component {...this.props}/>
            );
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

export default WithAuthRedirect;