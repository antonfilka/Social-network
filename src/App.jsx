import React from "react";
import NavBar from "./components/Navbar/NavBar";
import "./styles.css";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar state={props.store.getState().navBar}/>

                <div className='content'>

                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                    <Route path='/dialogs'  component={DialogsContainer}/>

                    <Route path='/news' component={News}/>

                    <Route path='/music' component={Music}/>

                    <Route path='/settings' component={Settings}/>

                    <Route path='/users' render={ () => <UsersContainer/> }/>

                </div>
        </div>
    );
}

export default App