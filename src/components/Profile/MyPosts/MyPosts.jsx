import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        alert(text);
    }

    return(
        <div className={classes.myPosts}>
            <div className={classes.header}>
                <div><h3>My posts</h3></div>
                <textarea ref={newPostElement}>Enter your text here...</textarea>
                <div className={classes.addButton}>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {props.state.map( (obj) => <Post message={obj.text} likes={obj.likesCont}/>)}
            </div>
        </div>
    );
}

export default MyPosts;