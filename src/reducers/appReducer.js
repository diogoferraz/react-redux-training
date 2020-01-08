import * as actionType from '../actions/actionsType'; 
import { updateObject } from '../helpers/utility';

const initialState = {
    display: [],
    showModal: false,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionType.APP_FETCH : return updateObject( state, { display: action.payload });
        case actionType.MODAL_OPEN : return ({ ...state, showModal: true });
        case actionType.MODAL_CLOSE : return ({ ...state, showModal: false });
        default: return state;
    }
};

export default reducer;
