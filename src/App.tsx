import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from './components/Navigator/navigator';

function App() {
  return (
    <Router>
    <div id="wrapper" className="wrapper">
      <Nav></Nav>
      <div className="content-wrapper">
        <div className="content">
          <nav>fdgdfgdfgfdg</nav>
        </div>
        <footer className="sticky-footer">
          <div className="container my-auto">
              <div className="copyright text-center my-auto">
                  <span>Copyright © Kobi Krasnoff Website 2021</span>
              </div>
          </div>
        </footer>
      </div>
    </div>
    </Router>
  );
}

export default App;
