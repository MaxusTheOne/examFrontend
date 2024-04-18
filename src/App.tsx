import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
import DeliveriesPage from './pages/DeliveriesPage';
import VanPage from './pages/VanPage';

function App() {
  return (
    <div>
          <NavBar />
          <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/Vans" element={<VanPage />} />
              <Route path="/Deliveries" element={<DeliveriesPage />} />
          </Routes> 
    </div>

 
  );
}

export default App;
