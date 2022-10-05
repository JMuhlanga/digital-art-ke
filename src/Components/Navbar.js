import React from 'react';

function NavBar() {
    
  return (
    <div className="navbar">

        <nav>
            <div>
                <div>
                    <a href="#hero">DIGI-ARTS-KE</a>
                </div>
                <ul>                   
                    <li>
                        <a href="#about">About</a>
                    </li>                    
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>                    
                    <li>
                        <a href="#events">Events</a>
                    </li>                  
                                        
                    <li>
                        <a href="#contact">Contact-Us</a>
                    </li>
                </ul>                
            </div>
        </nav>

    </div>
  );
}


export default NavBar;