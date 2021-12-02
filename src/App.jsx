import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import "./styles.css";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


export default function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.navBar}/>
                <div className='content'>

                    <Route path='/profile' render={ () => <Profile
                        state={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>

                    <Route path='/dialogs' render={ () => <Dialogs
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>

                    <Route path='/news' component={News}/>

                    <Route path='/music' component={Music}/>

                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
    );
}
