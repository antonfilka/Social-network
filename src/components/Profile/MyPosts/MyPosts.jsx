import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () =>{
    return(
        <div>
            <div className={classes.header}>
                <div>My posts</div>
                <textarea>Enter your text here...</textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;