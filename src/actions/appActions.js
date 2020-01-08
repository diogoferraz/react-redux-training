import * as actionsType from './actionsType';
import axios from 'axios';

const get = (payload) => ({ type: actionsType.APP_FETCH, payload });
const openModal = () => ({ type: actionsType.MODAL_OPEN });
const closeModal = () => ({ type: actionsType.MODAL_CLOSE });

const fetch = (res) => {
  return (dispatch) => {
    axios.get('products.json').then((response) => {
      dispatch(get(response.data));
    }).catch((err) => console.log('ERROR!', err));
  }
};

const appActions = {
  fetch,
  get,
  openModal,
  closeModal
};

export default appActions;