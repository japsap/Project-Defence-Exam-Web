import React, { useState } from "react";

// https://www.youtube.com/watch?v=S5q4sPe_K_Q
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete, } from 'react-icons/ai'

const Cart = ({ moviesCart, setItems, items }) => {
  const [ products, SetProducts ] = useState(moviesCart);

    // -----Increment Event------
    const increaseQuantity = (i) => {
      SetProducts(state =>
        state.map((data, o) => {
              if (i === o) {
                  return {
                      ...data,
                      qty: data.qty + 1
                  };
              }
              return data;
          })
      );
  };

  // -----Decrement Event------
  const decreaseQuantity = (i) => {
      SetProducts(state =>
        state.map((data, o) => {
              if (i === o) {
                  if (data.qty > 1) {
                      return { ...data, qty: data.qty - 1 };
                  } else {
                      return data;
                  }
              }
              return data;
          })
      );
  };



  // -----Remove Event------
  const removeFromCart = (i) => {
      if (window.confirm("Are you sure you want to remove into your cart?")) {
          SetProducts(prevCart =>
              prevCart.filter((item, o) => {
                  return i !== o;
              })
          );
          setItems( items - 1 )
      } else {
          // alert('No');
      }
  };


  // -empty-cart--------
  const emptycart = () => {
      if (window.confirm("Remove all items into your cart?")) {
          SetProducts([]);
          setItems(0)
      } else {
          // alert('No');
      }
  }



  // ------Total Product Incart and Total Price of cart
  const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
  const cartTotalAmount = products.reduce((acc, data) => acc + data.price * data.qty, 0);

  return (
    <div className="row justify-content-center m-5">
      <div className="col-md-8 mt-5 mb-5">
        <div className="card--card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
              <h5 className="text-white m-0">
                Cart Calculation{" "}
                {products.length > 0 ? `(${products.length})` : ""}
              </h5>
              {products.length > 0 ? (
                <button
                  className="btn btn-danger mt-0 btn-sm"
                  onClick={() => emptycart()}
                >
                  <i className="fa fa-trash-alt mr-2"></i>
                  <span>Empty Cart</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="card-body p-0">
            {products.length === 0 ? (
              <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td colSpan="6">
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart Is empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="table cart-table mb-0">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right">
                      <span id="amount" className="amount">
                        Total Amount
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((data, index) => {
                    const { _id, img, title, price, qty  } = data;
             
                    return (
                      <tr key={index}>
                        <td>
                          <button
                            className="prdct-delete"
                            onClick={() => removeFromCart(index)}
                          >
                            <AiOutlineDelete/>
                          </button>
                        </td>
                        <td>
                          <div className="product-img">
                            <img src={img} alt="" />
                          </div>
                        </td>
                        <td>
                          <div className="product-name">
                            <p>{title}</p>
                          </div>
                        </td>
                        <td>${price}</td>
                        <td>
                          <div className="prdct-qty-container">
                            <button
                              className="prdct-qty-btn"
                              type="button"
                              onClick={() => decreaseQuantity(index)}
                            >
                              <AiOutlineMinus/>
                            </button>
                            <input
                              type="text"
                              name="qty"
                              className="qty-input-box"
                              value={qty}
                              disabled
                            />
                            <button
                              className="prdct-qty-btn"
                              type="button"
                              onClick={() => increaseQuantity(index)}
                            >
                              <AiOutlinePlus/>
                            </button>
                          </div>
                        </td>
                        <td className="text-right">
                          ${(qty * price).toFixed(0)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan="3">&nbsp;</th>
                    <th>
                      Items in Cart<span className="ml-2 mr-2">: </span>
                      <span className="text-danger">{cartTotalQty}</span>
                    </th>
                    <th className="text-right">
                      Total Price<span className="ml-2 mr-2">: </span>
                      <span className="text-danger">
                         ${cartTotalAmount.toFixed(0)}
                      </span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
