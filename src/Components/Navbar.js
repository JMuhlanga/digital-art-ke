import React from 'react';

function NavBar() {
    
  return (   

        <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
            <div className="container">
                
                <a className="navbar-brand" href="#hero">DIGI-ARTS-KE</a>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">                  
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>                    
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery</a>
                        </li>                    
                        <li className="nav-item">
                            <a className="nav-link" href="#events">Events</a>
                        </li>                  
                                            
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-footer">Contact-Us</a>
                        </li>
                    </ul>
                </div>         
                                
            </div>
        </nav>

    
  );
}


export default NavBar;