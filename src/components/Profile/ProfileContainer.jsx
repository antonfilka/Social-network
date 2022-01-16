import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import axios from "axios";
import {withRouter} from "react-router-dom";




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 21170 ;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( response => {
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

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer);
