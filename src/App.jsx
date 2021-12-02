import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import "./styles.css";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export default function App(props) {
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.store.getState().navBar}/>

                <div className='content'>

                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route path='/news' component={News}/>

                    <Route path='/music' component={Music}/>

                    <Route path='/settings' component={Settings}/>

                </div>
        </div>
    );
}
