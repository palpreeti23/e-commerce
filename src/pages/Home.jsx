import React from "react";
import { MainBanner, ProductList, ProductRow, Footer } from "../components";
import { useSelector } from "react-redux";
import products from "../data/Products";

function Home() {
  return (
    <main className="overflow-y-auto flex-1  ">
      <div className="w-full min-h-screen bg-gray-200 flex flex-col flex-wrap rounded overflow-y-auto hide-scrollbar">
        <div className="w-full  ">
          <MainBanner />
        </div>
        <div className="w-full">
          <ProductList products={products} />
        </div>
        <div className="w-full my-8">
          <ProductRow heading={"Keep shopping for"} />
        </div>
        <div className="w-full my-4">
          <ProductRow
            list={"Fashion"}
            heading={"Best Sellers in Clothing & Accessories"}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
