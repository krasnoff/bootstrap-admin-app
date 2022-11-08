import { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/footer';
import GuardedRoute, { GuardedRouteProps } from './components/General/GuardedRoute/GuardedRoute';
import Header from './components/Header/header';
import Nav from './components/Navigator/navigator';
import CompanyReview from './pages/CompanyReview/CompanyReview';
import DashBoard from './pages/Dashboard/Dashboard';
import FormComponent from './pages/Form/Form';
import { Login } from './pages/Login/Login';
import NoMatch from './pages/NoMatch/NoMatch';
import SubMenu1 from './pages/SubMenu1/SubMenu1';
import SubMenu2 from './pages/SubMenu2/SubMenu2';

interface MyProps {
  errorSummery?: any
}

function App(props: MyProps) {
  const [toastShow, setToastShow] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const setShow = (isShow: boolean) => {
    setToastShow(false);
  }
  
  useEffect(() => {
    if (props.errorSummery) {
      setToastShow(true) 
    }    
  }, [props.errorSummery]);

  const defaultProtectedRouteProps: Omit<GuardedRouteProps, 'outlet'> = {
    isAuthenticated: isAuthenticated,
    authenticationPath: '/login',
  };

  const successfullLoginHandler = () => {
    console.log('successfullLoginHandler');
    setIsAuthenticated(true);
  }
  
  return (
    
    <div id="wrapper" className="wrapper" data-testid="/wrapper/">
      <Nav></Nav>
      <div className="content-wrapper">
        <div className="content">
          <Header></Header>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Form" element={<FormComponent />} />
            <Route path="/companyReview/:companySymbol" element={<CompanyReview />} />
            <Route path="/SubMenu1" element={<SubMenu1 />} />
            <Route path="/SubMenu2" element={<GuardedRoute {...defaultProtectedRouteProps} outlet={<SubMenu2 />} isAuthenticated={isAuthenticated} />} />
            <Route path="/Login" element={<Login onSuccessfullLogin={successfullLoginHandler} />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
      <ToastContainer className="p-3" position="bottom-end">
      <Toast onClose={() => setShow(false)} show={toastShow} delay={3000} bg="danger" autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Error Message</strong>
            <small>&nbsp;</small>
          </Toast.Header>
          <Toast.Body>Error {props.errorSummery}. Please call administrator</Toast.Body>
      </Toast>
      </ToastContainer>
    </div>
    
  );
}

const mapStateToProps = (state: any) => {
  return {
    errorSummery: state.ErrorSummeryReducer.error.message
  }
}

export default connect(mapStateToProps, null)(App);
