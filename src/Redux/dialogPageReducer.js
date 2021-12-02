const  ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const dialogPageReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            const message = {
                id: 7,
                message: state.updateMessage,
            };
            state.messages.push(message);
            state.updateMessage = " ";
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.updateMessage = action.newText;
            return state;
        default:
            return state;
    }
}






export const addMessageActionCreator= () => ({type: ADD_MESSAGE}) ;
export const updateMessageActionCreator= (newText) => ({type: UPDATE_MESSAGE_TEXT, newText: newText}) ;