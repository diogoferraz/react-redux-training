import React from 'react';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import appActions from '../../actions/appActions';
import cartActions from '../../actions/cartActions';
import Modal from '../UI/Modal/Modal';
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { showModal, cartList } = useSelector((state) => ({ 
    showModal: state.appReducer.showModal,
    cartList: state.cartReducer.cart, 
  }));

  const handleTotalPrice = () => {
    return cartList.reduce((a, b) => {
      const input = parseFloat(b.price);
      return a + input
    }, 0)
  }

  const list = (cartItem, index) => {
    return(
      <div key={index} className="cart-item">
        <span className="item-image">{cartItem.image}</span>
        <span className="item-title">Title: {cartItem.title}</span>
        <span className="item-price">Price: {cartItem.price}</span>
        <button type="submit" onClick={() => dispatch(cartActions.remove(cartItem.id))}>Remove</button>
      </div>
    );
  }
  return (
    <Modal show={showModal} modalClosed={() => dispatch(appActions.closeModal())}>
      <div className="content-modal">
        <div className="content-remove"><button id="remove-button" type="submit" onClick={() => dispatch(cartActions.clear())}>Remove All</button></div>
        {cartList && cartList.map((item, index) => list(item, index))}
        <div>Total Price: {cartList && handleTotalPrice()}</div>
      </div>
    </Modal>
  )
}

export default Cart;