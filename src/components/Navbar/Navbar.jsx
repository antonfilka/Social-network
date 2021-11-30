import React from "react";
import classes from './Navbar.module.css';

const Navbar = () =>{
    return(
      <nav className={classes.nav}>
      <div>
        <a href={'#a'} className={`${classes.item} ${classes.active}`}>Profile</a>
      </div>
      <div>
        <a href={'#a'} className={classes.item}>Message</a>
      </div>
      <div>
        <a href={'#a'} className={classes.item}>News</a>
      </div>
      <div>
        <a href={'#a'} className={classes.item}>Music</a>
      </div>
      <div>
        <a href={'#a'} className={classes.item}>Settings</a>
      </div>
    </nav>
    );
}

export default Navbar;