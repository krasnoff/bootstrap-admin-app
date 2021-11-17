import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.scss';
import { faLaughWink } from '@fortawesome/free-solid-svg-icons'
import Nav from './components/Navigator/navigator';

function App() {
  return (
    <div id="wrapper">
      <Nav></Nav>
    </div>
  );
}

export default App;
