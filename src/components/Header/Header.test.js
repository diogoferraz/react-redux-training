import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ReactReduxHooks from '../../hooks/react-redux';
import whislistActions from '../../actions/whislistActions';

describe('<Header />', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = configureStore([thunk])({
      wishlist: [],
    });
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    wrapper = shallow(<Header store={store} />);
  });

  it('should render two images', () => { 
    expect(wrapper.find('img')).toHaveLength(2);
  });
  it('should add whishlist in store', () => {
    let payload = {
      "id": 1,
      "title": "Title product 1",
      "description": "Description product 1",
      "price": "10.12",
      "image": "https://i.picsum.photos/400/300.jpg"
    }
    store.dispatch(whislistActions.add(payload))
    const actions = store.getActions()
    const expectedPayload = { type: "WHISHLIST_ADD", payload }
    expect(actions).toEqual([expectedPayload])
  });
  it('should remove whishlist in store', () => {
    let newStore = configureStore([thunk])({
      wishlist: [{
        "id": 1,
        "title": "Title product 1",
        "description": "Description product 1",
        "price": "10.12",
        "image": "https://i.picsum.photos/400/300.jpg"
      }],
    });
    let payload = {"id": 1}
    newStore.dispatch(whislistActions.remove(payload))
    const actions = newStore.getActions()
    const expectedPayload = { type: "WHISHLIST_REMOVE", payload }
    expect(actions).toEqual([expectedPayload])
  });
  it('should open modal when click on cart', () => {
    const button = wrapper.find('#cart')
    button.prop('onClick')()
    const expectedPayload = { type: "MODAL_OPEN" }
    expect(store.getActions()).toEqual([expectedPayload]);
  });
});
