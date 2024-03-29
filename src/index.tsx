import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './Store/Store';
import { Provider } from 'react-redux';
import watcherSaga from './Store/Sagas/MarketSummary';
import { SessionContextProvider } from './contexts/SessionContext';

const store = configureStore();
store.runSaga(watcherSaga);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store = { store }>
    <BrowserRouter>
      <SessionContextProvider>
        <App />
      </SessionContextProvider>
    </BrowserRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
