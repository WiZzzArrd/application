import React, {Component} from 'react';
import style from "./profileStatus.module.css"

class ProfileStatus extends Component {



    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = ()=>{
        this.setState({
            editMode:true,
        })
    }

    deactivateEditMode=()=>{
        this.setState({
            editMode: false,
        })

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e)=>{
        this.setState({
            status: e.target.value,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                state: this.props.state,
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode} className={style.aboutme}>
                        <p>{this.props.status || "----"}</p>
                    </div>
                }

                {this.state.editMode &&
                    <div className={"search"}>
                    <input autoFocus={true} onBlur={this.deactivateEditMode}
                           onChange={(e)=>this.onStatusChange(e)}
                           type={"text"} value={this.state.status}></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;