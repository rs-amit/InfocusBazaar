import React, { useState } from 'react';
import "./Register.css";
import logo from "../assert/profileLogo.png";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { RegisterUser } from "../redux/action/authAction";
import { useSelector, useDispatch } from "react-redux";


function Register() {
    const [error, setError] = useState("");
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const dispatch = useDispatch()
    const history = useHistory()

    const RegisterFunc = async (e) => {
        e.preventDefault()

        if (password !== cpassword) {
            setCpassword("")
            setTimeout(() => {
                setError("")
            }, 3000)
            setError("password does not match, please try again")
        }
        console.log("crediantial",userName, email, password)
        dispatch(RegisterUser(userName, email, password))
        history.push('/login')
    }


    return (
        <div className="Register">
            {
                error && <p className="register-error">{error}</p>
            }
            <div className="register-container">
                <Link to="/">
                    <img
                        className="logo"
                        src={logo}
                    />
                </Link>
                <form className="register-wrap" onSubmit={RegisterFunc}>
                    <input
                        className="user-username register-input"
                        placeholder="username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="user-email register-input"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="user-password register-input"
                        placeholder="password"
                        type="password"
                        userName={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="user-Cpassword register-input"
                        placeholder="comfirm password"
                        type="password"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                    />
                    <p className="email-paragraph">
                        By signing up, you agree to the <span> INFOCUS </span>
                        condition of use & sale. please see our privacy Notice
                    </p>
                    <button className="register-btn" type="submit"> Login </button>
                </form>
                <p className="login-link">Already have an account..?<Link to="/login"> Login</Link></p>
            </div>
        </div>
    )
}

export default Register
