import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Nav from './components/Navigator/navigator';
import CompanyReview from './pages/CompanyReview/CompanyReview';
import DashBoard from './pages/Dashboard/Dashboard';
import NoMatch from './pages/NoMatch/NoMatch';

function App() {
  return (
    
    <div id="wrapper" className="wrapper" data-testid="/wrapper/">
      <Nav></Nav>
      <div className="content-wrapper">
        <div className="content">
          <Header></Header>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/companyReview/:companySymbol" element={<CompanyReview />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
