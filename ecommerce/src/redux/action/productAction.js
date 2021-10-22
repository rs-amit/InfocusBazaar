import * as actionTypes from "../constants/productConstant";
import axios from "axios";


export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST })
        const { data } = await axios.get(`/products`);
        const mainData = data.getData;
        console.log(mainData)
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payLoad: mainData            
        })
        
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payLoad: error.message
        })
    }
}


export const ShortingHIGHTOLOW =()=> async(dispatch) => {
    dispatch({
        type:"HIGH-TO-LOW",
        PayLoad:"HIGH-TO-LOW"
    })
}

export const ShortingLOWTOHIGH =()=> async(dispatch) => {
    dispatch({
        type:"LOW-TO-HIGH",
        PayLoad:"LOW-TO-HIGH"
    })
}

export const inventory =()=> async(dispatch)=>{
    dispatch({
        type:"TOGGLE-INVENTORY"    
    })
}

export const fastDelivery=()=>async(dispatch)=>{
  dispatch({
      type:"FAST-DELIVERY"
  })
}


export const getProductsDetails = (productId) => async (dispatch) => {

    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST })
        console.log("productId",productId)
        const { data } = await axios.get(`/products/${productId}`);
        const mainData = data.productDetail;
        console.log("mainData",mainData)
       
        dispatch({
            type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,
            payLoad:mainData,
        })
    } catch (error) {

        dispatch({
            type: actionTypes.GET_PRODUCTS_DETAILS__FAIL,
            PayLoad: error.message && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const removeProductDetail = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCTS_DETAILS_RESET,
    })

}