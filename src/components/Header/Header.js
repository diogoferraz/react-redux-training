import React from 'react';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import appActions from '../../actions/appActions';
import ShopCart from '../../assets/svgs/cart.svg';
import Whishlist from '../../assets/svgs/whishlist.svg';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { whishlist } = useSelector((state) => ({whishlist: state.wishlistReducer.whishlist}));
  return(
    <header className="header">
      <div className="menu">
        <span onClick={() => dispatch(appActions.openModal())}><img src={ShopCart} alt=""/></span>
        <span><img src={Whishlist} alt=""/><span>{whishlist ? whishlist.length : 0}</span></span>
      </div>
    </header>
  )
}

export default Header;