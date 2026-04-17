import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProceed = () => {
    const amount = getTotalCartAmount();
    navigate('/payment', { state: { amount } });
  };

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p><p>Title</p><p>Price</p><p>Quantity</p><p>Total</p><p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => cartItems[e.id] > 0 && (
        <div key={e.id}>
          <div className="cartitems-format cartitems-format-main">
            <img src={e.image} alt='' />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price * cartItems[e.id]}</p>
            <img src={remove_icon} alt='' onClick={() => removeFromCart(e.id)} style={{ cursor: 'pointer' }} />
          </div>
          <hr />
        </div>
      ))}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button onClick={handleProceed}>
            Proceed To Checkout
          </button>

        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, then enter it here</p>
          <div className="cartitems-promobox">
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
