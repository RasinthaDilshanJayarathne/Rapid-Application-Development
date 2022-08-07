import Home from "../pages/Home/home";
import { Fragment } from 'react';
import Login from "../pages/Login/login";
import Product from "../pages/Product/product";
import ResponsiveAppBar from "../pages/AppBar/index"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    // <Fragment>
    //   {/* <Login /> */}
    //   {/* <Home/> */}
    //   <ResponsiveAppBar/>
    // </Fragment>

    <Routes>
      <Route path="/" element={<ResponsiveAppBar />}>
        <Route index element={<Home />} />
        {/* <Route path="cart" element={<CartManage />} />
        <Route path="product" element={<ProductManage />} />
        <Route path="register" element={<UserRegistration />} />
        <Route path="logIn" element={<LogIn />} /> */}
      </Route>
    </Routes>

  );
}

export default App;
