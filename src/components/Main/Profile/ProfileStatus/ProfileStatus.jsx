import React, {Component} from 'react';
import style from "./profileStatus.module.css"

class ProfileStatus extends Component {

    state = {
        editMode: false,
    }

    activateEditMode(){
        this.setState({
            editMode:true,
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode.bind(this)} className={style.aboutme}>
                        <p>{this.props.aboutMe || ""}</p>
                    </div>
                }

                {this.state.editMode &&
                    <div className={"search"}>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type={"text"} value={this.props.aboutMe}></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;