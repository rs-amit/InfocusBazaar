import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidedoor from "./componants/Sidedoor";
import Backdrop from "./componants/Backdrop";
import Productdetail from "./componants/Productdetail";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import Login from "./Login/Login";
import Register from "./Login/Register";
import { useSelector } from "react-redux"

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const user = useSelector(state => state.user)
  const { EcommUser } = user;
  console.log("user", EcommUser)


  return (
    <Router>
      <Sidedoor show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" >
            <HomeScreen click={() => setSideToggle(true)} />
          </Route>
          <Route exact path="/cart">
            {EcommUser ? <CartScreen click={() => setSideToggle(true)} /> : <Login />}
          </Route>
          <Route exact path="/product/:id">
            {EcommUser ? <Productdetail click={() => setSideToggle(true)} /> : <Login />}
          </Route>
          <Route exact path="/login">
            {!EcommUser ? <Login /> : <HomeScreen click={() => setSideToggle(true)} />}
          </Route>
          <Route exact path="/register">
            {!EcommUser ? <Register /> : <HomeScreen click={() => setSideToggle(true)} />}
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
