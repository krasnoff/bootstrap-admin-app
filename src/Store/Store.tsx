import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import ChartReducer from './Reducers/ChartSummery';
import ErrorSummeryReducer from './Reducers/ErrorSummery';
import MarketSummeryReducer from './Reducers/MarketSummary';
import QuoteSummeryReducer from './Reducers/QuoteSummary';

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  MarketSummery: MarketSummeryReducer,
  QuoteSummary: QuoteSummeryReducer,
  ErrorSummeryReducer: ErrorSummeryReducer,
  ChartReducer: ChartReducer
});
  
const configureStore = () => {
    return { ...createStore(
      rootReducer,
      storeEnhancers(applyMiddleware(initialiseSagaMiddleware))), 
      runSaga: initialiseSagaMiddleware.run
    }
}

export default configureStore;