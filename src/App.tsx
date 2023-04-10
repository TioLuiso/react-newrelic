import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'


function App() {
  const options = {
    init: {}, // NREUM.init
    info: {}, // NREUM.info
    loader_config: {} // NREUM.loader_config
  }
  
  // The agent loader code executes immediately on instantiation.
  new BrowserAgent(options)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
