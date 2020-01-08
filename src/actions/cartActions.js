import * as actionsType from './actionsType';

const get = () => ({ type: actionsType.CART_GET });
const add = (payload) => ({ type: actionsType.CART_ADD, payload });
const clear = () => ({ type: actionsType.CART_CLEAR });
const remove = (resId) => ({ type: actionsType.CART_DELETE, payload: resId });


const cartActions = {
  get,
  add,
  remove,
  clear
};

export default cartActions;