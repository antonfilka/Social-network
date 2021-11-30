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
                <Post message={"Hello, I'm back from Italy"} likes={21}/>
                <Post message={"Give me a like"} likes={0}/>
                <Post message={"Let's code"} likes={17}/>
                <Post message={"Play football!!"} likes={1}/>
            </div>
        </div>
    );
}

export default MyPosts;