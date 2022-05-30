import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Stores from './pages/Stores/Stores';
import Layout from './components/Layout';
import Product from './pages/Product/Product'
import './index.css'
import store from './store';
import Categories from './pages/Categories/Categories';
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Thankyou from './pages/Thankyou/Thankyou'
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import UserInfo from './pages/UserInfo/UserInfo'
import PromotionDetail1 from './pages/PromotionDetails/PromotionDetail1';
import PromotionDetail2 from './pages/PromotionDetails/PromotionDetail2';
import PromotionDetail3 from './pages/PromotionDetails/PromotionDetail3';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Product />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/stores" element={<Stores />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/thankyou" element={<Thankyou />}/>
          <Route path="/account/login" element={<Login />}/>
          <Route path="/account/register" element={<Register />}/>
          <Route path="/account/info" element={<UserInfo />}/>
          <Route path="/promotion/1" element={<PromotionDetail1 />}/>
          <Route path="/promotion/2" element={<PromotionDetail2 />}/>
          <Route path="/promotion/3" element={<PromotionDetail3 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)
