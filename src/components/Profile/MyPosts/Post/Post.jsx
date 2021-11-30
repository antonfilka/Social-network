import React from "react";
import classes from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={classes.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="No"/>
            <span> {props.message} </span>
            <div>
                <span>Likes {props.likes}</span>
            </div>
        </div>
    )
    ;
}

export default Post;