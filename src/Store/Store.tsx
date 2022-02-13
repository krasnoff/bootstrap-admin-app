import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { runSaga } from "redux-saga";
import ErrorSummeryReducer from './Reducers/ErrorSummery';
import MarketSummeryReducer from './Reducers/MarketSummary';
import QuoteSummeryReducer from './Reducers/QuoteSummary';

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  MarketSummery: MarketSummeryReducer,
  QuoteSummary: QuoteSummeryReducer,
  ErrorSummeryReducer: ErrorSummeryReducer
});
  
const configureStore = () => {
    return { ...createStore(
      rootReducer,
      storeEnhancers(applyMiddleware(initialiseSagaMiddleware))), 
      runSaga: initialiseSagaMiddleware.run
    }
}

export default configureStore;