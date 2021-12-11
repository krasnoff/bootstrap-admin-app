import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Nav from './components/Navigator/navigator';

function App() {
  return (
    <Router>
    <div id="wrapper" className="wrapper">
      <Nav></Nav>
      <div className="content-wrapper">
        <div className="content">
          <Header></Header>
        </div>
        <Footer></Footer>
      </div>
    </div>
    </Router>
  );
}

export default App;
