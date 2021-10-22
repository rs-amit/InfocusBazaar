import React from 'react';
import "./CartItem.css";

function CartItem({ id, name, imageUrl, price, countInStock, quantity, addToCartHandler, removeCartHandler }) {
    return (

        <div className="cartitem">
            <img
                src={imageUrl}
                alt="image"
            />
            <div className="cartitem-info">
                <p><strong>{name}</strong></p>
                <p>Price : ₹ <strong>{price}</strong></p>
                <p className="cart-star">4.5 ⭐</p>
                <select value={quantity} onChange={(e) => addToCartHandler(id, e.target.value)}>
                    {[...Array(countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                </select>
                <div className="remove-btn">
                    <button onClick={() => removeCartHandler(id)}>Remove From Carts</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
