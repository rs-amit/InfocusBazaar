import React from 'react'
import "./Product.css";
import { Link } from "react-router-dom";

function Products({ productId, name, imageUrl, price ,rating}) {
    
    return (
        <Link to={`/product/${productId}`} className="productlink">
            <div className="product">
                <div className="product-info">
                    <div className="product-name">{name}</div>
                    <div className="product-rating">{[...Array(rating)].map((rating)=><span>⭐</span>)}</div>
                    <div className="product-Price">₹ <strong>{price} </strong></div>
                </div>
                <img
                    className="product-img"
                    src={imageUrl}
                    alt={name}
                />
            </div>
        </Link >
    )
}

export default Products;
