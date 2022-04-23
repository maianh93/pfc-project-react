import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Promotions from './pages/Promotions/Promotions';
import Stores from './pages/Stores/Stores';
import Layout from './components/Layout';
import Product from './pages/Product/Product'
import './index.css'
import store from './store';
import Categories from './pages/Categories/Categories';
import Cart from './pages/Cart/Cart'

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
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/cart" element={<Cart />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
)
