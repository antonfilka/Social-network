import React from "react";
//import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Redirect from "react-router-dom/es/Redirect";

const Profile = (props) =>{
    if(!props.isAuthorized) return <Redirect to='/login'/>
    return(
        <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
    );
}

export default Profile;