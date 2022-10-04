import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Events from './Components/Events';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/Navbar';



function App() {
  return (
    <div className="App">

      <Routes>

        <Route exact path ="/">
          <Home />
        </Route>

        <Route path ="/gallery">
          <Gallery />
        </Route>

        <Route path ="/events">
          <Events />
        </Route>

        <Route path ="/about">
          <About />
        </Route>

        <Route path ="/contact">
          <Contact />
        </Route>
        
      </Routes>

      <NavBar />
     
    </div>
  );
}

export default App;
