import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {LogoutUser} from "../redux/action/authAction";



function Header({ click }) {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const { EcommUser } = useSelector(state => state.user)

    const getCartCount = () => {
        return cartItems.reduce((quantity, item) => (Number(item.quantity) + quantity), 0)
    }

    const LogoutHandler=()=>{
        if(EcommUser){
            localStorage.removeItem('EcommUser')
            dispatch(LogoutUser())
        }    
    }

    return (
        <div className="header">
            <Link to="/">
                <h2 className="headerLogo"><span className="header-logo-web">INF</span>ocus</h2>
            </Link>
            <div className="header-search">
                <input className="header-search-input" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-nav">
                <p className="header-userName">{EcommUser && EcommUser.userName}</p>
                <Link to="/login"><p className="header-login" onClick={LogoutHandler}>{EcommUser===null ? "Login":"Logout"}</p></Link>
                <Link to="/cart">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon className="basket" />
                        <span className="header-basketCount">{getCartCount()}</span>
                    </div>
                </Link>
            </div>
            <div className="hamburger-menu" onClick={click}>
                <MenuIcon className="menu" />
            </div>
        </div>
    )
}

export default Header
