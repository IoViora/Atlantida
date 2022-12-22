import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";

const Order = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <div className="cart-order">
        <div className="cart-order-box">
          <h2 className="navbar-information2">Order Summary</h2>
          <div className="order-subtotal">
            <p className="navbar-information">Subtotal</p>
            <p className="navbar-information">${cart.totalPrice}</p>
          </div>
        </div>
        <button className="order-checkout">CHECKOUT</button>
        <p
          className="order-continue-shopping"
          onClick={() => navigate("/servicelist")}
        >
          Continue Shopping
        </p>
      </div>
    </>
  );
};

export default Order;
