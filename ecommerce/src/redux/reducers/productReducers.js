import * as actionTypes from "../constants/productConstant"

export const getProductReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };

        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payLoad
            };

        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payLoad
            };

        default:
            return state;
    }

}

export const ShortingProductsReducer = (state = { sorting: null }, action) => {
    switch (action.type) {
        case "HIGH-TO-LOW":
            return { ...state, sorting: action.PayLoad }

        case "LOW-TO-HIGH":
            return { ...state, sorting: action.PayLoad }

        default:
            return state;
    }
}

export const fastDeliveryInventoryReducer = (state = { showInventoryAll: true, showFastDeliveryOnly: false, }, action) => {
    switch (action.type) {
        case "TOGGLE-INVENTORY":
            return { ...state, showInventoryAll: !state.showInventoryAll }

        case "FAST-DELIVERY":
            return { ...state, showFastDeliveryOnly: !state.showFastDeliveryOnly }

        default:
            return state;
    }
}

export const getProductDetailReducer = (state = { products: [] }, action) => {


    switch (action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                products: action.payLoad
            }
        case actionTypes.GET_PRODUCTS_DETAILS__FAIL:
            return {
                loading: false,
                error: action.payLoad
            }
        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return {
                products: {},
            }

        default:
            return state;
    }

}