import React from 'react';
import "./CartScreen.css";
import CartItem from "../componants/CartItem";
import Header from '../componants/Header';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// action
import { addToCart } from "../redux/action/cartAction";
import { removeFromCart } from "../redux/action/cartAction"



function CartScreen({click}) {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const addToCartHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity))
    }

    const setCartCount = () => {
        return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0)
    }

    const setTotalCartPrice = () => {
        return cartItems.reduce((price, item) => (item.price * item.quantity) + price, 0)
    }

    const removeCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <>  
            <Header click={click}/>
            <div className="cartscreen">
                <div className="checkout-inMobile-screen">
                    <p className="subtotal">subtotal( {setCartCount()} items) : <strong>₹ {setTotalCartPrice()}</strong></p>
                    <button>proceed to checkout</button>
                </div>

                <div className="cartscreen-left">
                    <img
                        className="checkout-ad"
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt=""
                    />
                    <div>
                        <h2 className="checkout"> Your Shopping Basket</h2>
                        {
                            cartItems.length === 0 ? (<h2 className="empty-basket">your basket is empty <Link to="/" className="goback"> GO BACK </Link></h2>) : (
                                cartItems.map(item => (
                                    <div className="cartscreen-left">
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            imageUrl={item.imageUrl}
                                            price={item.price}
                                            quantity={item.quantity}
                                            countInStock={item.countInStock}
                                            addToCartHandler={addToCartHandler}
                                            removeCartHandler={removeCartHandler}
                                        />
                                    </div>
                                )

                                ))
                        }
                    </div>
                </div>
                <div className="cartscreen-right">
                    <p className="subtotal">subtotal( {setCartCount()} items) : <strong>₹ {setTotalCartPrice()}</strong></p>
                    <button>proceed to checkout</button>
                </div>

            </div>
        </>
    )
}

export default CartScreen;
