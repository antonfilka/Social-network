import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './Redux/redux-store'
import BrowserRouter from "react-router-dom/es/BrowserRouter";

export let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById("root"))
}

renderEntireTree(store);

store.subscribe( () => renderEntireTree(store.getState()));