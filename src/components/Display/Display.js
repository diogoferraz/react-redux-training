import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import appActions from '../../actions/appActions';
import cartActions from '../../actions/cartActions';
import wishlistActions from '../../actions/whislistActions';
import './Display.css';

const Display = () => {
  const dispatch = useDispatch();
  const { display, cartList, whishlist } = useSelector((state) => ({ 
    display: state.appReducer.display,
    cartList: state.cartReducer.cart,
    whishlist: state.wishlistReducer.whishlist,
   }));

  useEffect(() => {
    dispatch(appActions.fetch());
  }, []);

  const renderItem = (element, index) => {
    const existsInCart = cartList.find(cartItem => element.id === cartItem.id);
    const existsInWhishlist = whishlist.find(wishListItem => element.id === wishListItem.id);
  
    return (
      <li key={index} className="item">
        <div className="item-header">
          <span>{element.title}</span>
          <span><img src={element.image} alt=""/></span>
        </div>
        <div className="item-details">
          <span>{element.description}</span>
          <span>{element.price}</span>
        </div>
        <div className="item-buttons">
          <button type="button" className="button" onClick={() => !existsInWhishlist ? dispatch(wishlistActions.add(element)) : dispatch(wishlistActions.remove(element.id))}> 
            {!existsInWhishlist ? 'Add to Whishlist' : 'Remove from Whishlist'}
          </button>
          <button type="button" className="button" onClick={() => !existsInCart ? dispatch(cartActions.add(element)) : dispatch(cartActions.remove(element.id))}> 
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