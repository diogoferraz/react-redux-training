import React from 'react';
import { shallow, mount } from 'enzyme';
import Cart from './Cart';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ReactReduxHooks from '../../hooks/react-redux';
// import appActions from '../../actions/appActions';

describe('<Cart />', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = configureStore([thunk])({
      cart: [
        {
          "id": 1,
          "title": "Title product 1",
          "description": "Description product 1",
          "price": "10.12",
          "image": "https://i.picsum.photos/400/300.jpg"
        },
        {
          "id": 2,
          "title": "Title product 1",
          "description": "Description product 1",
          "price": "10.12",
          "image": "https://i.picsum.photos/400/300.jpg"
        }
      ],
    });

    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    wrapper = shallow(<Cart store={store} />);
  });

  it('should render items', () => {

  });
  it('should remove all items', () => {
    const button = wrapper.find("#remove-button").at(0);
    button.prop('onClick')();
    const expectedPayload = { type: "CART_CLEAR" }
    expect(store.getActions()).toEqual([expectedPayload]);
  });
  it('should remove item by id', () => {

  });
  it('should render total price', () => {

  });
});
