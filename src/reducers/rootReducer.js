import { combineReducers } from 'redux';
import appReducer from './appReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
  appReducer,
  cartReducer,
  wishlistReducer
});

export default rootReducer;
