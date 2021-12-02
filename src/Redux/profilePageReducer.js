const  ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


export const profilePageReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            const post = {
                id: 7,
                text: state.newPostText,
                likesCount: 23
            };
            state.posts.push(post);
            state.newPostText = " ";
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


}

export const addPostActionCreator= () => ({type: ADD_POST}) ;
export const updatePostActionCreator= (newText) => ({type: UPDATE_POST_TEXT, newText: newText}) ;