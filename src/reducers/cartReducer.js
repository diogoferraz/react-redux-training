import * as actionType from '../actions/actionsType';
import { updateObject } from '../helpers/utility';

const initialState = {
  cart: []
};

const remove = (state, action) => {
  const updatedCart = state.cart.filter(item => item.id !== action.payload)
  return updateObject(state, { cart: updatedCart});
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CART_GET: return state;
    case actionType.CART_ADD: return updateObject(state, { cart: state.cart.concat(action.payload) });
    case actionType.CART_DELETE: return remove(state, action);
    case actionType.CART_CLEAR: return updateObject(state, initialState);
    default: return state;
  }
};

export default cartReducer;