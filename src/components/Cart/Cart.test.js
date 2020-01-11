import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ReactReduxHooks from '../../hooks/react-redux';

describe('<Cart />', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = configureStore([thunk])({
      showModal: true,
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
    wrapper.find('.cart-item').forEach((node) => {
      expect(node.find('.item-image')).toBeTruthy();
      expect(node.find('.item-title')).toBeTruthy();
      expect(node.find('.item-price')).toBeTruthy();
      expect(node.find('#remove-item')).toBeTruthy();
    });
  });
  it('should remove all items', () => {
    const button = wrapper.find("#remove-button").at(0);
    button.prop('onClick')();
    const expectedPayload = { type: "CART_CLEAR" }
    expect(store.getActions()).toEqual([expectedPayload]);
  });
  it('should remove item by id', () => {
    const button = wrapper.find(".cart-item #remove-item").at(0);
    const payload = 1;
    button.prop('onClick')();
    const expectedPayload = { type: "CART_DELETE", payload }
    expect(store.getActions()).toEqual([expectedPayload]);
  });
  it('should render total price', () => {
    let totalPrice = store.getState().cart.reduce((a, b) => parseFloat(b.price) + a, 0)
    expect(totalPrice).toBe(20.24);

  });
});
