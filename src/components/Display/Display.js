import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import appActions from '../../actions/appActions';
import cartActions from '../../actions/cartActions';
import wishlistActions from '../../actions/wishlistActions';
import './Display.css';

const Display = () => {
  const dispatch = useDispatch();
  const { display, cart, wishlist } = useSelector((state) => ({ 
    display: state.appReducer.display,
    cart: state.cartReducer.cart,
    wishlist: state.wishlistReducer.wishlist,
   }));

  useEffect(() => {
    dispatch(appActions.fetch());
  }, []);

  const renderItem = (element, index) => {
    const existsInCart = cart && cart.find(cartItem => element.id === cartItem.id);
    const existsInwishlist = wishlist && wishlist.find(wishListItem => element.id === wishListItem.id);
  
    return (
      <li key={index} className="item">
        <div className="item-header">
          <span id="title">{element.title}</span>
          <span id="image"><img src={element.image} alt=""/></span>
        </div>
        <div className="item-details">
          <span id="description">{element.description}</span>
          <span id="price">{element.price}</span>
        </div>
        <div className="item-buttons">
          <button type="button" id="button-wishlist" className="button" onClick={() => !existsInwishlist ? dispatch(wishlistActions.add(element)) : dispatch(wishlistActions.remove(element.id))}> 
            {!existsInwishlist ? 'Add to wishlist' : 'Remove from Wishlist'}
          </button>
          <button type="button" id="button-cart" className="button" onClick={() => !existsInCart ? dispatch(cartActions.add(element)) : dispatch(cartActions.remove(element.id))}> 
            {!existsInCart ? 'Add to Cart' : 'Remove from Cart'}
          </button>
        </div>
      </li>
    );
  }
  return (
    <main className="main">
      <div className="content">
        <ul>
          {display && display.map((element, index) => renderItem(element, index))}
        </ul>
      </div>
    </main>
  )
}

export default Display;