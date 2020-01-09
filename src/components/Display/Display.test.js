import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ReactReduxHooks from '../../hooks/react-redux';
// import appActions from '../../actions/appActions';

describe('<Display />', () => {
  let store;
  let wrapper;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    store = configureStore([thunk])({
      wishlist: [],
    });
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    wrapper = shallow(<Display store={store} />);
  });

  it('should render items with image, title, price, and two buttons', () => {
    
  });
  it('should show remove from whishlist ', () => {
    
  });
  it('should show remove from cart', () => {
    
  });
});
