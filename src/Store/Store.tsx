import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { runSaga } from "redux-saga";
import MarketSummeryReducer from './Reducers/MarketSummery';

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialiseSagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  MarketSummery: MarketSummeryReducer
});
  
const configureStore = () => {
    return { ...createStore(
      rootReducer,
      storeEnhancers(applyMiddleware(initialiseSagaMiddleware))), 
      runSaga: initialiseSagaMiddleware.run
    }
}

export default configureStore;