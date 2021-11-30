import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import "./styles.css";
import classes from "./components/Profile/Profile.module.css";


export default function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='content'>
                {/*<Dialogs />*/}
                <Profile/>
            </div>
        </div>
    );
}
