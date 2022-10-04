import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Events from './Components/Events';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">

      <Switch>

        <Route exact path ="/home">
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
        
      </Switch>
     
    </div>
  );
}

export default App;
