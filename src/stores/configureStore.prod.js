import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import monitorReducerEnhancer from '../enhancers/monitorReducer';
import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composeEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);

  return store;
};

export default configureStore;
