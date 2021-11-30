import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return(
        <div className={classes.content}>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU"
            alt=""
          />
        </div>
        <div>ava+description</div>
        <MyPosts/>
      </div>
    );
}

export default Profile;