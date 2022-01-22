import {UserAPI} from "../api/api";

const  ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
    posts: [
        {id:1, text:'Hello  world', likesCount:3},
        {id:2, text:"I'm back from Germany", likesCount:17},
        {id:3, text:"Let's play football", likesCount:33},
    ],
    newPostText: "Enter post text..",
    profile: {
        aboutMe: 'About me',
        contacts:{
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: "User",
        userId: 1,
        photos:{
            large: null,
            small: null
        }
    }
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            const newPost = {
                id: 7,
                text: state.newPostText,
                likesCount: 23
            };
            let newState = {...state};
            newState.posts = [...state.posts];
            newState.posts.push(newPost);
            newState.newPostText = "";
            return newState;
        }

        case UPDATE_POST_TEXT: {
            let newState = {...state}
            newState.newPostText = action.newText;
            return newState;
        }

        case SET_USER_PROFILE:{
            return ({...state, profile: action.profile});
        }

        default:
            return state;

    }
}

export const addPost = () => ({type: ADD_POST}) ;
export const updatePost = (newText) => ({type: UPDATE_POST_TEXT, newText: newText}) ;
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export const setUserProfile = (userId) => {
    return (dispatch) => {
        UserAPI.setUserProfile(userId).then( response => {
            dispatch(setUserProfileSuccess(response));
        })
    }
}
