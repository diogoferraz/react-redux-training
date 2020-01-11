import React from 'react';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import appActions from '../../actions/appActions';
import ShopCart from '../../assets/svgs/cart.svg';
import Wishlist from '../../assets/svgs/wishlist.svg';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => ({wishlist: state.wishlistReducer.wishlist}));
  return(
    <header className="header">
      <div className="menu">
        <span id="cart" onClick={() => dispatch(appActions.openModal())}><img src={ShopCart} alt=""/></span>
        <span><img src={Wishlist} alt=""/><span>{wishlist ? wishlist.length : 0}</span></span>
      </div>
    </header>
  )
}

export default Header;