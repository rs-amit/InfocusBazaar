import React from 'react'
import "./Sidedoor.css"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StoreIcon from '@material-ui/icons/Store';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import {useSelector ,useDispatch} from "react-redux";
import {LogoutUser} from "../redux/action/authAction";


function Sidedoor({ show, click }) {

    const dispatch = useDispatch()

     const { EcommUser } = useSelector(state => state.user)

    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart;
    console.log(cartItems.length)

    const sideDoorClass = ["Sidedoor"];
    if (show) {
        sideDoorClass.push("show")
    }

    const LogoutHandler=()=>{
        if(EcommUser){
            localStorage.removeItem('EcommUser')
            dispatch(LogoutUser())
        }    
    }

    return <div className={sideDoorClass.join(" ")}>
        <ul className="sidedoor-link">
            <li>
                <Link to="/">
                    <span onClick={click}><StoreIcon className="sidedoor-Icon" />shop</span>
                </Link>
            </li>
            <li>
                <Link to="/cart" onClick={click}>
                    <span><ShoppingBasketIcon className="sidedoor-Icon" /> carts <span className="sidedoorCartsCounter">{cartItems.length}</span></span>
                </Link>
            </li>
            <li>
                <Link to="/login" onClick={click}>
                    <span  onClick={LogoutHandler}> <ExitToAppIcon className="sidedoor-Icon"/>{EcommUser ? "Logout":"login"}</span>
                </Link>
            </li>
        </ul>
    </div>


}

export default Sidedoor;
