
let renderEntireTree = () => console.log(this.state);

const state = {
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
}

export let addPost = (postText) => {
    const post = {
        id: 7,
        text: postText,
        likesCount: 23
    };
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export let addMessage = (messageText) => {
    const message = {
        id: 7,
        message: messageText,
    };
    state.dialogPage.messages.push(message);
    state.dialogPage.updateMessage = '';
    renderEntireTree(state);
}
export let updateMessageText = (newText) => {
    state.dialogPage.updateMessage = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;