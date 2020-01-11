import React from 'react';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import appActions from '../../actions/appActions';
import cartActions from '../../actions/cartActions';
import Modal from '../UI/Modal/Modal';
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { showModal, cart } = useSelector((state) => ({ 
    showModal: state.appReducer.showModal,
    cart: state.cartReducer.cart, 
  }));

  const handleTotalPrice = () => {
    return cart.reduce((a, b) => parseFloat(b.price) + a, 0)
  }

  const list = (cartItem, index) => {
    return(
      <div key={index} className="cart-item">
        <span className="item-image">{cartItem.image}</span>
        <span className="item-title">Title: {cartItem.title}</span>
        <span className="item-price">Price: {cartItem.price}</span>
        <button id="remove-item" type="submit" onClick={() => dispatch(cartActions.remove(cartItem.id))}>Remove</button>
      </div>
    );
  }
  return (
    <Modal show={showModal} modalClosed={() => dispatch(appActions.closeModal())}>
      <div className="content-modal">
        <div className="content-remove"><button id="remove-button" type="submit" onClick={() => dispatch(cartActions.clear())}>Remove All</button></div>
        {cart && cart.map((item, index) => list(item, index))}
        <div className="total-price">Total Price: {cart && handleTotalPrice()}</div>
      </div>
    </Modal>
  )
}

export default Cart;