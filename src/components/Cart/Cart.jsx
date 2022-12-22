import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContextProvider";
import "./Cart.css";
export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <>
      <table>
        <tbody>
          <tr className="cart-desktop tr-head">
            <th className="item" align="left">
              ITEM
            </th>
            <th align="center">ITEM PRICE</th>
            <th align="right">SUBTOTAL</th>
          </tr>
          {cart.products.map((row, i) => (
            <tr className="row" key={i}>
              <td valign="top" align="left" className="cart-desktop img-descr">
                <img className="cartimg" src={row.item.image} alt="none" />
                <div className="carddetails">
                  <p className="carddetails">{row.item.name}</p>
                </div>
              </td>
              <td valign="top" className="prices cart-desktop" align="center">
                <p className="carddetails">${row.item.price}</p>
              </td>
              <td className="cart-desktop" valign="top" align="right">
                <p className="carddetails">${row.subPrice}</p>
              </td>{" "}
              <p
                className="carddetails"
                align="left"
                sx={{ display: "block" }}
                onClick={() => deleteCartProduct(row.item.id)}
              >
                Remove
              </p>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
