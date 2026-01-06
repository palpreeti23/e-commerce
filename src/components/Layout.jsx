import React, { Children } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full flex flex-col">
      <Header />

      {/* <Sidebar /> */}
      <div className="flex flex-1 ">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
