// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import './index.css';
import About from './pages/About.jsx';
import ProductDetail from "./pages/ProductDetail.jsx";
import Field from "./pages/Field.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="urunlerimiz" element={<Products />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="urun/:slug" element={<ProductDetail />} />
          <Route path="tarlalarimiz" element={<Field />} />
          {/* Diğer sayfalar: hakkimizda, tarlalarimiz ... */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
