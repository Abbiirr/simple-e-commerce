import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILURE,
} from "../constants/orderConstants";

const initialState = {
  order: null,
  loading: false,
  error: null,
};

export const orderCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: null,
      };
    case ORDER_CREATE_FAILURE:
      return {
        ...state,
        order: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
