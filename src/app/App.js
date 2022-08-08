import Home from "../pages/Home/home";
import { Fragment } from 'react';
import Login from "../pages/Login/login";
import Product from "../pages/Product/product";
import {Route, Routes} from "react-router-dom";
import Cart from "../pages/Cart/cart";
import User from "../pages/User/user";
import ResponsiveAppBar from "../pages/AppBar/index"

function App() {
  return (
    // <Fragment>
    //   {/* <Login /> */}
    //   {/* <Home/> */}
    //   <ResponsiveAppBar/>
    // </Fragment>

    <Routes>
      {/* <Route path="/login" element={<Login />}></Route> */}
      <Route path="/" element={<ResponsiveAppBar />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user" element={<User/>} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>

  );
}

export default App;
