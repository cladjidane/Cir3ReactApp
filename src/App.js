import './App.css';

// Thirds services
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Aside from './Components/Aside'
import Content from './Components/Content'
import ContentCours from './Components/ContentCours'
import ContentProfs from './Components/ContentProfs'
import React from 'react';
import logo from './logo.svg';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profs">Profs</Link></li>
              <li><Link to="/cours">Cours</Link></li>
            </ul>
          </nav>

        </header>
        <div className="Container">
          <Switch>
            <Route exact path="/"><Content /></Route>
            <Route path="/profs"><ContentProfs /></Route>
            <Route path="/cours"><ContentCours /></Route>
          </Switch>
          <Aside />
        </div>
      </div>
    </Router>
  );
}

export default App;
