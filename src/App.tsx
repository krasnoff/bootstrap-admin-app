import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <form className="navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                  <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                </a>
              </li>
            </ul>
          </nav>
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
