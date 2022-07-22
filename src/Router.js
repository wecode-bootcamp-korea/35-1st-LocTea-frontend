import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main/Main';
import Nav from '../src/Components/Nav/Nav';
import Cart from '../src/pages/Cart/Cart';
import ItemDetail from '../src/pages/ItemDetail/ItemDetail';
import ItemList from '../src/pages/ItemList/ItemList';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
