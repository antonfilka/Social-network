import React from "react";
import classes from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3053&q=80"
                    alt=""
                    className={classes.topPhoto}
                />
            </div>
            <div className={classes.profileInfo}>
                <div>
                    <img src={props.profile.photos.small || 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'} alt="No"/>
                </div>
                <div className={classes.description}>
                    <div>
                        Profile info
                    </div>
                    <div>
                        <ul>
                            <li>Full Name: {props.profile.fullName}</li>
                            <li>ID: {props.profile.userId}</li>
                            <li>Want's to be: {props.profile.lookingForAJobDescription || "Not entered"}</li>
                            <li>GitHub: {props.profile.contacts.github || "Not entered" }</li>
                            <li>VK: {props.profile.contacts.vk || "Not entered"}</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ProfileInfo;