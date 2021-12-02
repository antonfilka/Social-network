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
                {id:4, text:'I have a new laptop', likesCount:2},
            ],
            newPostText: {text: "Enter post text.."}
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


    addPost (postText) {
        const post = {
            id: 7,
            text: postText,
            likesCount: 23
        };
        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = " ";
        this.renderEntireTree(this._state);
    },
    updatePostText (newText) {
        this._state.profilePage.newPostText = newText;
        this.renderEntireTree(this._state);
    },
    addMessage (messageText) {
        const message = {
            id: 7,
            message: messageText,
        };
        this._state.dialogPage.messages.push(message);
        this._state.dialogPage.updateMessage = " ";
        this.renderEntireTree(this._state);
    },
    updateMessageText (newText) {
        this._state.dialogPage.updateMessage = newText;
        this.renderEntireTree(this._state);
    },

    dispatch (action){
        if (action.type === 'ADD-POST'){
            const post = {
                id: 7,
                text: action.postText,
                likesCount: 23
            };
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = " ";
            this.renderEntireTree(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this.renderEntireTree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            const message = {
                id: 7,
                message: action.messageText,
            };
            this._state.dialogPage.messages.push(message);
            this._state.dialogPage.updateMessage = " ";
            this.renderEntireTree(this._state);
        }else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogPage.updateMessage = action.newText;
            this.renderEntireTree(this._state);
        }
    }

}

export default store;