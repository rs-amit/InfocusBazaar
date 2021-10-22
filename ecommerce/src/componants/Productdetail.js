import React, { useState, useEffect } from 'react'
import "./Productdetail.css";
import Header from '../componants/Header';
import { getProductsDetails } from "../redux/action/productAction";
import { addToCart } from "../redux/action/cartAction";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"


function Productdetail({click}) {

    const params = useParams()
    const history = useHistory()
    console.log(params.id)

    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();

    const productdetail = useSelector((state) => state.getProductDetails)
    const { products, loading, error } = productdetail;


    useEffect(() => {
        if (products && params.id !== products._id) {
            dispatch(getProductsDetails(params.id));
        }
    }, [dispatch, params, products])

    const addToCartHandler = () => {
        dispatch(addToCart(products._id, quantity))
        history.push("/cart")
    }

    return (
        <>
            <Header click={click}/>
            <div className="productdetail">
                {
                    loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                        <>
                            <div className="productdetail-lift">

                                <img
                                    className="main-img"
                                    src={products.imageUrl}
                                    alt="cannot display image"
                                />

                                <div className="left-info">
                                    <p className="left-name"><strong>{products.name}</strong></p>
                                    <p><strong>Description :</strong> Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for large prints and image cropping)
                                        ISO: 100-6400 sensitivity range (critical for obtaining grain-free pictures, especially in low light)
                                        Image Processor: DIGIC 4+ with 9 autofocus points (important for speed and accuracy of autofocus and burst photography)</p>
                                    <p><span>Price :</span>₹ <strong>{products.price}</strong></p>
                                </div>
                            </div>
                            <div className="productdetail-right">
                                <p><span>Price :</span> ₹ <strong>{products.price}</strong></p>
                                <p><span>Status :</span><strong>{products.inStock === true ? "inStock" : "outOfStock"}</strong></p>
                                <div>
                                    Quantity:
                                    <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                        {[...Array(products.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <button onClick={addToCartHandler}>Add To Cards</button>
                            </div>
                        </>
                    )
                }

            </div>
        </>

    )
}

export default Productdetail

