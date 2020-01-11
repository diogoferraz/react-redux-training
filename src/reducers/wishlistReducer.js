import * as actionType from '../actions/actionsType';
import { updateObject } from '../helpers/utility';

const initialState = {
  wishlist: []
};

const remove = (state, action) => {
  const updatedWishlist = state.wishlist.filter(item => item.id !== action.payload)
  return updateObject(state, { wishlist: updatedWishlist});
}

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.WISHLIST_GET: return state;
    case actionType.WISHLIST_ADD: return updateObject(state, { wishlist: state.wishlist.concat(action.payload) });
    case actionType.WISHLIST_DELETE: return remove(state, action);
    default: return state;
  }
};

export default wishListReducer;