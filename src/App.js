import './App.css';


import Content from './Components/Content'
import Aside from './Components/Aside'
import logo from './logo.svg';

import React, { useContext, createContext } from "react";
export const Context = createContext();

function App() {
  const name = "Paul";

  return (
    <Context.Provider value={{name}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Container">
          <Content />
          <Aside />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
