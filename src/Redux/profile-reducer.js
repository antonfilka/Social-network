const  ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
    posts: [
        {id:1, text:'Hello  world', likesCount:3},
        {id:2, text:"I'm back from Germany", likesCount:17},
        {id:3, text:"Let's play football", likesCount:33},
    ],
    newPostText: "Enter post text.."
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
        default:
            return state;

    }
}

export const addPostActionCreator= () => ({type: ADD_POST}) ;
export const updatePostActionCreator= (newText) => ({type: UPDATE_POST_TEXT, newText: newText}) ;