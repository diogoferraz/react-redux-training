import * as actionsType from './actionsType';

const get = () => ({ type: actionsType.WISHLIST_GET });
const add = (payload) => ({ type: actionsType.WISHLIST_ADD, payload });
const remove = (resId) => ({ type: actionsType.WISHLIST_DELETE, payload: resId });


const whishlistActions = {
  add,
  get,
  remove
};

export default whishlistActions;