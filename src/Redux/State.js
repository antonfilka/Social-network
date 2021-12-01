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
        ]
    },
    profilePage:{
        posts: [
            {id:1, text:'Hello  world', likesCont:3},
            {id:2, text:"I'm back from Germany", likesCont:17},
            {id:3, text:"Let's play football", likesCont:33},
            {id:4, text:'I have a new laptop', likesCont:2},
        ]
    }
}

export default state;