import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './Redux/redux-store'
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import { Provider } from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
    </BrowserRouter>
    , document.getElementById("root"))
