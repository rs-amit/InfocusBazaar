import React, { useEffect } from 'react';
import "./HomeScreen.css"
import Products from "../componants/Product";
import Header from '../componants/Header';
import { useSelector, useDispatch } from "react-redux";

// action
import { getProducts as productList, ShortingHIGHTOLOW, ShortingLOWTOHIGH, inventory, fastDelivery } from "../redux/action/productAction";


function HomeScreen({ click }) {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts;

    const getSorting = useSelector(state => state.getSorting)
    const { sorting } = getSorting;

    const { showInventoryAll, showFastDeliveryOnly } = useSelector(state => state.getfastDeliveryInventory)

    // here we are using dispatch  to run the action productList function which is in redux/action/productAction file 
    useEffect(() => {
        dispatch(productList())
    }, [dispatch])


    const sortingFunc = (products, sorting) => {

        if (sorting === "HIGH-TO-LOW") {
            return products.sort((a, b) => b.price - a.price)
        }
        if (sorting === "LOW-TO-HIGH") {
            return products.sort((a, b) => a.price - b.price)
        }
        console.log(products)
        return products
    }

    const getFilteredData = (sortingValue, { showInventoryAll, showFastDeliveryOnly }) => {
        return sortingValue && sortingValue.filter(({ fastDelivery }) => showFastDeliveryOnly ? fastDelivery : true)
            .filter(({ inStock }) => showInventoryAll ? inStock : true)
    }

    const sortingValue = sortingFunc(products, sorting)
    const FilteredData = getFilteredData(sortingValue, { showInventoryAll, showFastDeliveryOnly })


    return (
        <>
            <Header click={click} />
            <div className="homescreen">

                <img
                    className="coverImage"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB654576486_.png"
                    alt=""
                />
                <div className="manageprice">
                    <div>
                        <legend>Filters :</legend>
                        <div>
                            <label><input onClick={() => dispatch(inventory())} name="btn" type="checkbox" className="high-to-low" /> Include Out of Stock</label>
                            <label><input onClick={() => dispatch(fastDelivery())} name="btn" type="checkbox" className="low-to-high" /> Fast Delivery Only</label>
                        </div>
                    </div>
                    <div>
                        <legend>Sort By :</legend   >
                        <div>
                            <label><input onClick={() => dispatch(ShortingHIGHTOLOW())} name="btn" type="radio" className="high-to-low" /> Price high-to-low</label>
                            <label><input onClick={() => dispatch(ShortingLOWTOHIGH())} name="btn" type="radio" className="low-to-high" /> Price low-to-high</label>
                        </div>
                    </div>
                </div>
                <div className="homescreen-product">
                    {

                        loading ? (<h1> Loading... </h1>) : error ? (<h1>{error} </h1>) : (
                            FilteredData && FilteredData.map(product =>
                            (
                                <Products
                                    key={product._id}
                                    productId={product._id}
                                    modelNo={product.modelNo}
                                    name={product.name}
                                    imageUrl={product.imageUrl}
                                    price={product.price}
                                    countInStock={product.countInStock}
                                    rating={product.rating}
                                />
                            ))
                        )
                    }

                </div>



            </div>
        </>
    )
}

export default HomeScreen;
