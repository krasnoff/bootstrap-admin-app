import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.scss';
import { faLaughWink } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div id="wrapper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* <!-- Sidebar - Brand --> */}
            <span className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                  <FontAwesomeIcon icon={faLaughWink} />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </span>
      </ul>
    </div>
  );
}

export default App;
