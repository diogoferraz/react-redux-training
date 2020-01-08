import * as actionType from '../actions/actionsType';
import { updateObject } from '../helpers/utility';

const initialState = {
  whishlist: []
};

const remove = (state, action) => {
  const updatedWhishlist = state.whishlist.filter(item => item.id !== action.payload)
  return updateObject(state, { whishlist: updatedWhishlist});
}

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.WHISHLIST_GET: return state;
    case actionType.WHISHLIST_ADD: return updateObject(state, { whishlist: state.whishlist.concat(action.payload) });
    case actionType.WHISHLIST_DELETE: return remove(state, action);
    default: return state;
  }
};

export default wishListReducer;