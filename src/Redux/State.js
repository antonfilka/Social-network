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

    _addPost () {

        const post = {
            id: 7,
            text: this._state.profilePage.newPostText,
            likesCount: 23
        };
        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = " ";
        this.renderEntireTree(this._state);
    },
    _updatePostText (newText) {
        this._state.profilePage.newPostText = newText;
        this.renderEntireTree(this._state);
    },
    _addMessage () {
        const message = {
            id: 7,
            message: this._state.dialogPage.updateMessage,
        };
        this._state.dialogPage.messages.push(message);
        this._state.dialogPage.updateMessage = " ";
        this.renderEntireTree(this._state);
    },
    _updateMessageText (newText) {
        this._state.dialogPage.updateMessage = newText;
        this.renderEntireTree(this._state);
    },

    dispatch (action){
        if (action.type === 'ADD-POST'){
            this._addPost()
        }

        else if (action.type === 'UPDATE-POST-TEXT'){
            this._updatePostText(action.newText)
        }

        else if (action.type === 'ADD-MESSAGE') {
            this._addMessage()
        }

        else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._updateMessageText(action.newText)
        }
    }

};

export default store;