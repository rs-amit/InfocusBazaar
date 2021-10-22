import React, { useState } from 'react'
import "./Login.css";
import logo from "../assert/profileLogo.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {LoginUser} from "../redux/action/authAction";
import {CircularProgress} from "@material-ui/core"


function Login() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    const { EcommUser,error, Loading } = useSelector(state => state.user)
    console.log(EcommUser)

    const SubmitHandler=(e)=>{
        e.preventDefault()
        console.log(LoginUser)
        dispatch(LoginUser(userName , email))
    }

    return (
        <div className="login">
            <div className="login-container">
                <Link to="/">
                    <img
                        className="logo"
                        src={logo}
                    />
                </Link>
                <form className="login-wrap" onSubmit={SubmitHandler}>
                    <input
                        className="user-email login-input"
                        type="email"
                        value={userName}
                        placeholder="email"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        className="user-password login-input"
                        type="password"
                        value={email}
                        placeholder="password"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="login-btn"> {Loading ? <CircularProgress/> : "Login"} </button>
                    <p className="signup-Link">Do u have a Account..?<Link to="/register"> SignUp</Link></p>
                </form>
                <p className=""></p>
            </div>
        </div>
    )
}

export default Login
