import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Nav from './components/Navigator/navigator';
import CompanyReview from './pages/CompanyReview/CompanyReview';
import DashBoard from './pages/Dashboard/Dashboard';
import NoMatch from './pages/NoMatch/NoMatch';

interface MyProps {
  errorSummery?: any
}

function App(props: MyProps) {
  useEffect(() => {
    console.log('props..', props);    
  }, [props.errorSummery]);
  
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

const mapStateToProps = (state: any) => {
  return {
    errorSummery: state.ErrorSummeryReducer.error.message
  }
}

// const mapDispatchToProps = () => {
//   return {
//     getQuoteSummery: (symbol: string, queryString: string) => getQuoteSummery(symbol, 'lang=en&region=US&modules=defaultKeyStatistics%2CassetProfile')
//   }
// }
  
export default connect(mapStateToProps, null)(App);

// export default App;
