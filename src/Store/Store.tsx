import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { runSaga } from "redux-saga";
// import getD3Data from './Reducers/getD3Data';

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // D3Data: getD3Data
});
  
const configureStore = () => {
    return { ...createStore(
      rootReducer,
      storeEnhancers(applyMiddleware(initialiseSagaMiddleware))), 
      runSaga: initialiseSagaMiddleware.run
    }
}

export default configureStore;