import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import axios from "axios";




class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/21826').then( response => {
            this.props.setUserProfile(response.data);
        })
    }

    render(){
        return(
            <div>
            <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({profile: state.profilePage.profile});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
