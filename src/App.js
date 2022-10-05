import React from 'react';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">

      {/* Navbar Section */}
      <NavBar />

      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />

      {/*Gallery Section  */}
      <Gallery />

      {/* Events Section */}
      <Events />

      {/*Contact Section  */}
      <Contact />

    </div>
  );
}

export default App;
