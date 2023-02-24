import axios from "axios";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILURE,
} from "../constants/orderConstants";

export const createOrder =
  (userId, products, totalPrice) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      //   const userId = localStorage.getItem("userId");

      const order = { userId, products, totalPrice };
      const { data } = await axios.post(
        "/api/orders/create",

        {
          user: order.userId,
          orderItems: order.products,
          totalPrice: Number(order.totalPrice),
        }
      );

      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };