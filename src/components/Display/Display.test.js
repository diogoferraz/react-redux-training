import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ReactReduxHooks from '../../hooks/react-redux';

describe('<Display />', () => {
  let store;
  let wrapper;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    store = configureStore([thunk])({
      display: [
        {
          "id": 1,
          "title": "Title product 1",
          "description": "Description product 1",
          "price": "10.12",
          "image": "https://i.picsum.photos/400/300.jpg"
        },
        {
          "id": 2,
          "title": "Title product 2",
          "description": "Description product 2",
          "price": "10.12",
          "image": "https://i.picsum.photos/400/300.jpg"
        }
      ],
      cart: [
        {
          "id": 1,
          "title": "Title product 1",
          "description": "Description product 1",
          "price": "10.12",
          "image": "https://i.picsum.photos/400/300.jpg"
        }
      ],
      wishlist: [
        {
          "id": 2,
          "title": "Title product 2",
          "description": "Description product 2",
          "price": "10.12",
          "image": "https://i.picsum.photos/400/300.jpg"
        }
      ],
    });
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    wrapper = shallow(<Display store={store} />);
  });


  it('should render items with image, title, price, and two buttons', () => {
    wrapper.find('.item').forEach((node) => {
      expect(node.find('#title')).toBeTruthy();
      expect(node.find('#image')).toBeTruthy();
      expect(node.find('#description')).toBeTruthy();
      expect(node.find('#price')).toBeTruthy();
      expect(node.find('.button')).toHaveLength(2);
    });
  });
  it('should show remove from wishlist and shoudl remove once clicked', () => {
    const payload = 2;
    const button = wrapper.find('.item-buttons #button-wishlist').at(1);
    expect(button.text()).toMatch('Remove from Wishlist');
    button.prop('onClick')();
    const expectedPayload = { type: "WISHLIST_REMOVE", payload }
    expect(store.getActions()).toEqual([expectedPayload]);
  });
  it('should show remove from cart and should remove once clicked', () => {
    const payload = 1;
    const button = wrapper.find('.item-buttons #button-cart').at(0);
    expect(button.text()).toMatch('Remove from Cart');
    button.prop('onClick')();
    const expectedPayload = { type: "CART_DELETE", payload }
    expect(store.getActions()).toEqual([expectedPayload]);
  });
});
