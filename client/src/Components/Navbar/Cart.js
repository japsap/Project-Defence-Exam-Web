import React, { useState } from "react";

//boostrap
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// https://www.youtube.com/watch?v=S5q4sPe_K_Q
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";

//import paypal img
import paypal__img from "../../img/paypal-img.png";

//paypal
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

const Cart = ({ moviesCart, setItems, items }) => {
  //modals
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //cart items
  const [products, SetProducts] = useState(moviesCart);



  //increment Event
  const increaseQuantity = (i) => {
    SetProducts((state) =>
      state.map((data, o) => {
        if (i === o) {
          return {
            ...data,
            qty: data.qty + 1,
          };
        }
        return data;
      })
    );
  };

  //Decrement Event
  const decreaseQuantity = (i) => {
    SetProducts((state) =>
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

  //Remove Event
  const removeFromCart = (i) => {
    if (window.confirm("Are you sure you want to remove into your cart?")) {
      SetProducts((prevCart) =>
        prevCart.filter((item, o) => {
          return i !== o;
        })
      );
      setItems(items - 1);
    } else {
      // alert('No');
    }
  };

  // -empty-cart--------
  const emptycart = () => {
    if (window.confirm("Remove all items into your cart?")) {
      SetProducts([]);
      setItems(0);
    } else {
      // alert('No');
    }
  };

  // ------Total Product Incart and Total Price of cart
  const cartTotalQty = products.reduce((acc, data) => acc + data.qty, 0);
  const cartTotalAmount = products.reduce(
    (acc, data) => acc + data.price * data.qty,
    0
  ); 


    let product = {
      description: 'Ne moga da go naprawq',
      price: 20,
    }

 

  return (
    <div>
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
                      const { _id, img, title, price, qty } = data;
                      
                      return (
                        <tr key={index}>
                          <td>
                            <button
                              className="prdct-delete"
                              onClick={() => removeFromCart(index)}
                            >
                              <AiOutlineDelete />
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
                                <AiOutlineMinus />
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
                                <AiOutlinePlus />
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
          {/*  */}

          {/* modal for the buy */}
          {cartTotalQty <= 0 ? (
            ""
          ) : (
            <div className="text-end">
              <button className="buyBtn__cart" onClick={handleShow}>
                Buy Movies
              </button>
            </div>
          )}
          <Modal show={show} onHide={handleClose}>
            <PayPalScriptProvider options={{'client-id' : 'Ad6qsskkiQcRsrKDY_XDXTvz-E-m2j9J84hFcMd4jjgGZTfopjL1L9s63zhHQjnKMPD49gyY2AkGTOTt'}}>
              <Modal.Header closeButton>
                <Modal.Title>Buying in proccess</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Whoa, are you sure you want to buy{" "}
                {cartTotalQty == 1 ? "this movie" : "them movies"} ?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <PaypalCheckoutButton variant="primary" product={product}>
                  Buy Movies
                </PaypalCheckoutButton>
              </Modal.Footer>
            </PayPalScriptProvider>
          </Modal>
          {/* modal for the movie card buy */}
        </div>
      </div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6} className="text-end">
            <img
              src={paypal__img}
              className="img-fluid text-center"
              style={{ height: "auto", width: "200px" }}
            />
          </Col>
          <Col md={6} className="line__style">
            <p className="mt-2">
              Powered by<br></br>
              PayPal
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
