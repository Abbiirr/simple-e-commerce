import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const CartScreen = ({ match }) => {
  const history = useNavigate();
  const { productID } = useParams();
  const location = useLocation();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  //   const qty = history({
  //     pathname: "/cart",
  //     search: "=",
  //   });

  console.log(qty);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return <div>CartScreen</div>;
};

export default CartScreen;
