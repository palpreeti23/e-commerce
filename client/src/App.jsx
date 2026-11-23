import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import API from "./api/axios";
import { login, logout } from "./store/UserSlice";

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
import { setAddresses } from "./store/UserSlice";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await API.get("/users/profile");
        dispatch(login(response.data.user));
        dispatch(setAddresses(response.data.user.addresses || []));
      } catch (error) {
        dispatch(logout());
        console.log("User is not authenticated");
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [dispatch]);

  if (checkingAuth) {
    return <div>Checking authentication...</div>;
  }
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
                {/* <Route path="/login" element={<Login />} /> */}
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
