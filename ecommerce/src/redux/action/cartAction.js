import * as actionTypes from "../constants/cartConstant";
import axios from "axios";

export const addToCart = (id, quantity) => async ( dispatch, getState) => {
  const { data } = await axios.get(`/products/${id}`);
  const mainData = data.productDetail;

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payLoad: {
      id: mainData._id,
      name: mainData.name,
      imageUrl: mainData.imageUrl,
      price: mainData.price,
      countInStock: mainData.countInStock,
      quantity,
    }
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
};


export const removeFromCart = (id) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payLoad: id
  })
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems))
}
