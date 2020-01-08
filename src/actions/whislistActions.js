import * as actionsType from './actionsType';

const get = () => ({ type: actionsType.WHISHLIST_GET });
const add = (payload) => ({ type: actionsType.WHISHLIST_ADD, payload });
const remove = (resId) => ({ type: actionsType.WHISHLIST_DELETE, payload: resId });


const whishlistActions = {
  add,
  get,
  remove
};

export default whishlistActions;