// eslint-disable-next-line no-unused-vars
import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) =>{
//
//     let state = props.store.getState();
//
//     let onAddPost = () => props.store.dispatch(addPostActionCreator());
//     let onPostChange = (newText) => props.store.dispatch(updatePostActionCreator(newText));
//
//     return(<MyPosts
//         addPost={onAddPost}
//         postChange={onPostChange}
//         newPostText={state.profilePage.newPostText}
//         posts={state.profilePage.posts}
//     />);
// }
//
// export default MyPostsContainer;

const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {dispatch(addPostActionCreator())},
        postChange: (newText) => {dispatch(updatePostActionCreator(newText))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;