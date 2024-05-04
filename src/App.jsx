import './App.css'
import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import baseURL from './api';
import { Link } from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Signup from './components/Signup';
// import Cart from './components/Cart';


function App() {
  const pathname = useLocation().pathname;

  return (
  <>
    
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/Signup" element={<Signup />}/>
          <Route path="/product/Login" element={<Login />}/>
        </Route>
      </Routes>
    </>
  </>
  );
}

export default App;
