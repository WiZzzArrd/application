import React from 'react';
import {Redirect} from "react-router-dom";

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
    return RedirectComponent;
}

export default WithAuthRedirect;