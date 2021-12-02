import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{

    let onAddPost = () => props.addPost();
    let onPostChange = (event) => props.postChange(event.target.value);

    return(
        <div className={classes.myPosts}>

            <div className={classes.header}>

                <div><h3>My posts</h3></div>

                <textarea onChange={ onPostChange } value={props.newPostText}/>
                <div className={classes.addButton}>
                    <button onClick={ onAddPost }>Add post</button>
                </div>

            </div>

            <div className={classes.posts}>
                {props.posts.map( (obj) => <Post message={obj.text} likes={obj.likesCount}/>)}
            </div>

        </div>
    );
}

export default MyPosts;