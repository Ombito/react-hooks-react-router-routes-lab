import React from "react";
import { NavLink } from "react-router-dom";
import Home from './Home';
import Actors from './Actors';
import Movies from './Movies';
import Directors from './Directors';

function NavBar() {
  return (
    <div className="navbar">
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/movies'>
          Movies
        </NavLink>
        <NavLink to='/directors'>
          Directors
        </NavLink>
        <NavLink to='/actors'>
          Actors
        </NavLink>
    </div>
    )
}

export default NavBar;
