import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;

// reac router dom 5
// <Route exact path="/" >
//             <Home />
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//           <Route exact path="/cart">
//             <Cart />
//           </Route>
//           <Route exact path="/products">
//             <Products />
//           </Route>
//           <Route exact path="/products/:id" children={<SingleProduct />} />

//           <PrivateRoute exact path="/checkout">
//             <Checkout />
//           </PrivateRoute>
//           <Route exact path="*">
//             <Error />
//           </Route>
