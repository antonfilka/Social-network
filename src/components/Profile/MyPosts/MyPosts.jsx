import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{

    let newPostElement = React.createRef();

    let addPost = () => props.dispatch({type: 'ADD-POST', postText: newPostElement.current.value});

    let onPostChange = () => props.dispatch({type: 'UPDATE-POST-TEXT', postText: newPostElement.current.value});

    return(
        <div className={classes.myPosts}>
            <div className={classes.header}>
                <div><h3>My posts</h3></div>
                <textarea ref={newPostElement} onChange={ onPostChange } value={props.updateText}/>
                <div className={classes.addButton}>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.poasts.map( (obj) => <Post message={obj.text} likes={obj.likesCount}/>)}
            </div>
        </div>
    );
}

export default MyPosts;