import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) =>{

    let state = props.store.getState();

    let onAddPost = () => props.store.dispatch(addPostActionCreator());
    let onPostChange = (newText) => props.store.dispatch(updatePostActionCreator(newText));

    return(<MyPosts
        addPost={onAddPost}
        postChange={onPostChange}
        newPostText={state.profilePage.newPostText}
        posts={state.profilePage.posts}
    />);
}

export default MyPostsContainer;