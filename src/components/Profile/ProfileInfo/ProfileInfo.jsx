import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3053&q=80"
                    alt=""
                    className={classes.topPhoto}
                />
            </div>
            <div> ava+description</div>
        </div>
    );
}

export default ProfileInfo;