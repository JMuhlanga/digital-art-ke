import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    const navElements = () =>{
        return(
            <nav>
                <ul>
                    <NavLink exact to = "/">DIGI-ARTS-KE</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact-us</NavLink>
                </ul>
            </nav> 
        )
    }
  return (
    <div className="navbar">
        {navElements}
    </div>
  );
}

export default NavBar;