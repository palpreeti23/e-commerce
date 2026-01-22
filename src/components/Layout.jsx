import React, { Children, useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full flex flex-col">
      <Header setSearchQuery={setSearchQuery} />
      <main className="flex-1">
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </main>
    </div>
  );
}

export default Layout;
