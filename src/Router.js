import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './Components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ItemList from './pages/ItemList/ItemList';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemdetail/:id" element={<ItemDetail />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
