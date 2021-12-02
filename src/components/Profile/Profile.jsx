import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    return(
        <div>
        <ProfileInfo/>
        <MyPosts
            poasts={props.state.posts}
            updateText={props.state.newPostText}
            dispatch={props.dispatch}
        />
      </div>
    );
}

export default Profile;