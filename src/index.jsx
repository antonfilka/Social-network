import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from './Redux/State'
import {addPost} from "./Redux/State";
import {addMessage} from "./Redux/State";
import {updatePostText} from "./Redux/State";
import {updateMessageText} from "./Redux/State";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {subscribe} from "./Redux/State";

export let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText} addMessage={addMessage} updateMessageText={updateMessageText}/>
        </BrowserRouter>, document.getElementById("root"))
}

renderEntireTree(state);

subscribe(renderEntireTree);