import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";


let store = {
    _state: {
        navbar:{
            lastMessages:[
                {id: 1, name:'Tasya'},
                {id: 2, name:'Anton'},
                {id: 3, name:'Alessya'}
            ]
        },
        dialogPage:{
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
            updateMessage: 'Enter your message..'
        },
        profilePage:{
            posts: [
                {id:1, text:'Hello  world', likesCount:3},
                {id:2, text:"I'm back from Germany", likesCount:17},
                {id:3, text:"Let's play football", likesCount:33},
            ],
            newPostText: "Enter post text.."
        }
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this.renderEntireTree = observer;
    },
    renderEntireTree () {
        console.log(this._state)
    },

    dispatch (action){
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.renderEntireTree(this._state);
    }
};

export default store;