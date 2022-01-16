import {addPost, updatePost} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPost, updatePost})(MyPosts);

export default MyPostsContainer;