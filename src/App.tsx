import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from './components/Navigator/navigator';

function App() {
  return (
    <Router>
    <div id="wrapper">
      <Nav></Nav>
    </div>
    </Router>
  );
}

export default App;
