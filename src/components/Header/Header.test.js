import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
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
    wrapper = shallow(<Header store={store} />);
  });

  it('should render two images', () => { 
    expect(wrapper.find('img')).toHaveLength(2);
  }); /*
  it('should render a number from store', () => {
    
  });
  it('should open cart model when click cart button', () => {
    
  }); */
});
