const  ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const initialState = {
    dialogs: [
        {id: 1, name:'Tasya'},
        {id: 2, name:'Andrey'},
        {id: 3, name:'Denis'},
        {id: 4, name:'Vlad'},
        {id: 5, name:'Viktor'},
        {id: 6, name:'Nikita'}
    ],
    messages: [
        {id: 1, message:'Hello world'},
        {id: 1, message:'How are you'},
        {id: 1, message:'Yo'},
        {id: 1, message:'Yo'},
    ],
    newMessageText: 'Enter your message..'
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE: {
            const message = {
                id: 7,
                message: state.newMessageText,
            };
            let newState = {...state};
            newState.messages = [...state.messages];
            newState.messages.push(message);
            newState.newMessageText = " ";
            return newState;
        }
        case UPDATE_MESSAGE_TEXT: {
            let newState = {...state};
            newState.newMessageText = action.newText;
            return newState;
        }
        default:
            return state;
    }
}


export const addMessageActionCreator= () => ({type: ADD_MESSAGE}) ;
export const updateMessageActionCreator= (newText) => ({type: UPDATE_MESSAGE_TEXT, newText: newText}) ;