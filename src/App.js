import './App.css';

import Aside from './Components/Aside'
import Content from './Components/Content'
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Container">
        <Content />
        <Aside />
      </div>
    </div>
  );
}

export default App;