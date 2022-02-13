import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { runSaga } from "redux-saga";
import MarketSummeryReducer from './Reducers/MarketSummary';
import QuoteSummeryReducer from './Reducers/QuoteSummary';

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  MarketSummery: MarketSummeryReducer,
  QuoteSummary: QuoteSummeryReducer
});
  
const configureStore = () => {
    return { ...createStore(
      rootReducer,
      storeEnhancers(applyMiddleware(initialiseSagaMiddleware))), 
      runSaga: initialiseSagaMiddleware.run
    }
}

export default configureStore;