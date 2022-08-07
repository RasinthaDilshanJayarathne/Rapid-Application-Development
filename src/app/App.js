import Home from "../pages/Home/home";
import { Fragment } from 'react';
import Login from "../pages/Login/login";
import Product from "../pages/Product/product";
import ResponsiveAppBar from "../pages/AppBar/index"
import {Route, Routes} from "react-router-dom";
import Cart from "../pages/Cart/cart";

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
        {/* <Route path="register" element={<UserRegistration />} /> */}
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>

  );
}

export default App;
