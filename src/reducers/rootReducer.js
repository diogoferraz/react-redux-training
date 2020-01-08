import { combineReducers } from 'redux';
import appReducer from './appReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './whishlistReducer';

const rootReducer = combineReducers({
  appReducer,
  cartReducer,
  wishlistReducer
});

export default rootReducer;
