import { useState } from "react";

import "./App.css";
import { Layout, Login, Signup, Profile } from "./components";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WishList from "./pages/WishList";
import ItemsPage from "./pages/ItemsPage";
import AlertCard from "./AlertCard";
import Order from "./pages/Order";
import Summary from "./pages/Summary";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <BrowserRouter>
          <AlertCard />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/itemspage" element={<ItemsPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/order" element={<Order />} />
                <Route path="/summary" element={<Summary />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
