import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducers
import { cartsReducer } from "./reducers/cardReducer";
import { LoginReducer } from "./reducers/authReducer";
import { getProductDetailReducer, getProductReducer, ShortingProductsReducer, fastDeliveryInventoryReducer } from "./reducers/productReducers";

const reducer = combineReducers({      
  cart: cartsReducer,
  user:LoginReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailReducer,
  getSorting: ShortingProductsReducer,
  getfastDeliveryInventory: fastDeliveryInventoryReducer,
});

const middleWare = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
const EcommUserInLocalStorage = localStorage.getItem("EcommUser") ? JSON.parse(localStorage.getItem("EcommUser")) : null;

const INITIALSTATE = {
  cart: {
    cartItems: cartItemsInLocalStorage
  },
  user:{
    EcommUser: EcommUserInLocalStorage
  }
};

const store = createStore(
  reducer,
  INITIALSTATE,
  composeWithDevTools(applyMiddleware(...middleWare)),
);

export default store;
