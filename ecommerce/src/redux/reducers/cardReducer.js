import * as actionTypes from "../constants/cartConstant";

export const cartsReducer = (state = { cartItems: [] }, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payLoad;
            return {
                ...state, cartItems: [...state.cartItems, item]
            }

        case actionTypes.REMOVE_FROM_CART:
            const index = state.cartItems.findIndex((x) => x.id === action.payLoad)
            const newBasket = [...state.cartItems]
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.log(`can't remove product of id ${action.payLoad} becoz its not in the basket`)
            }
            return{
                ...state,cartItems:newBasket
            }

        default:
            return state;

    }
}
