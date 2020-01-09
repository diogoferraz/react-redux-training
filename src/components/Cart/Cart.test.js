import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ReactReduxHooks from '../../hooks/react-redux';
// import appActions from '../../actions/appActions';

describe('<Header />', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = configureStore([thunk])({
      wishlist: [],
    });
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    wrapper = shallow(<Cart store={store} />);
  });

  it('should render items', () => { 
    
  });
  it('should remove all items', () => {
    
  });
  it('should remove item by id', () => {
    
  });
  it('should render total price', () => {
    
  });
});
