import { useCallback, useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/footer';
import GuardedRoute, { GuardedRouteProps } from './components/General/GuardedRoute/GuardedRoute';
import Header from './components/Header/header';
import Nav from './components/Navigator/navigator';
import { useSessionContext } from './contexts/SessionContext';
import CompanyReview from './pages/CompanyReview/CompanyReview';
import DashBoard from './pages/Dashboard/Dashboard';
import FormComponent from './pages/Form/Form';
import { Login } from './pages/Login/Login';
import NoMatch from './pages/NoMatch/NoMatch';
import SubMenu1 from './pages/SubMenu1/SubMenu1';
import SubMenu2 from './pages/SubMenu2/SubMenu2';
import SubMenu3 from './pages/SubMenu3/SubMenu3';
import { disconnectSocket, initiateSocketConnection, subscribeToChat } from './services/socketio.service';

interface MyProps {
  errorSummery?: any
}

function App(props: MyProps) {
  const [toastShow, setToastShow] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = useCallback((path: string) => {
    updateSessionContext({...sessionContext, redirectPath: path});
  }, [sessionContext, updateSessionContext]);

  const setShow = (isShow: boolean) => {
    setToastShow(false);
  }

  const [randomSentence, setRandomSentence] = useState<string>('')

  useEffect(() => {
    if(!sessionContext.redirectPath) {
      setRedirectPath('dashboard');
    }
  }, [sessionContext.redirectPath, setRedirectPath]);
  
  useEffect(() => {
    if (props.errorSummery) {
      setToastShow(true) 
    }    
  }, [props.errorSummery]);

  // connecting socket
  useEffect(() => {
    initiateSocketConnection();

    // listen to broadcast
    subscribeToChat((err: any, data: any) => {
      setRandomSentence(data);
    });

    return () => {
      disconnectSocket();
    }
  }, []);

  // activate toast
  useEffect(() => {
    //console.log('from session', randomSentence);
    if (randomSentence.length > 0) {
      setToastShow(true);
    }
  }, [randomSentence]);

  const defaultProtectedRouteProps: Omit<GuardedRouteProps, 'outlet'> = {
    isAuthenticated: isAuthenticated,
    authenticationPath: '/login',
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath
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
            <Route path="/SubMenu2" element={<GuardedRoute {...defaultProtectedRouteProps} outlet={<SubMenu2 />} />} />
            <Route path="/SubMenu3" element={<SubMenu3 />} />
            <Route path="/Login" element={<Login onSuccessfullLogin={successfullLoginHandler} />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
      <ToastContainer className="p-3" position="bottom-end">
      <Toast onClose={() => setShow(false)} show={toastShow} delay={5000} bg="primary" autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notification Message</strong>
            <small>&nbsp;</small>
          </Toast.Header>
          <Toast.Body>{randomSentence}</Toast.Body>
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
