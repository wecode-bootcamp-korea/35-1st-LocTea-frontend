import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './Components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ItemList from './pages/ItemList/ItemList';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './Components/Footer/Footer';
import Purchase from './pages/Purchase/Purchase';
import EndPage from './pages/EndPage/EndPage';

const NavbarLayout = () => (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/endpage" element={<EndPage />} />
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemdetail/:id" element={<ItemDetail />} />
          <Route path="/order" element={<Purchase />} />
          <Route path="/itemlist/:category/:id" element={<ItemList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
