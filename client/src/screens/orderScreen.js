import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { createOrder } from "../actions/orderActions";
import { listOrders } from "../actions/orderActions";

const CheckoutScreen = () => {
  const dispatch = useDispatch();

  // Fetch the list of orders from the server
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  // Get the list of orders from the Redux store
  const orderList = useSelector((state) => state.orderList);
  const { orders } = orderList;
  return (
    <Row>
      <Col md={8}>
        <h1>Your Order</h1>
        {orders.length === 0 ? (
          <h2>
            Your cart is empty<Link to="/"> Go Back</Link>
          </h2>
        ) : (
          <ListGroup variant="flush">
            {orders.map((order) => (
              <ListGroup.Item key={order._id}>
                <Row>
                  <Col md={12}></Col>
                  <Col md={12}>
                    <span style={{ fontWeight: "bold" ? "bold" : "normal" }}>
                      Order Id:
                    </span>

                    {order._id}
                  </Col>
                  <Col md={8}>
                    <span style={{ fontWeight: "bold" ? "bold" : "normal" }}>
                      Total Price:
                    </span>
                    ${order.totalPrice}
                  </Col>
                  <ListGroup variant="flush">
                    <span style={{ fontWeight: "bold" ? "bold" : "normal" }}>
                      Products:
                    </span>
                    {order.orderItems.map((item) => (
                      <ListGroup.Item key={item._id}>
                        <Row>
                          <Col md={12}>{item.name}</Col>
                          <Col md={2}>${item.price}</Col>
                          <Col md={2}>{item.qty}</Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({orders.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {orders
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CheckoutScreen;
