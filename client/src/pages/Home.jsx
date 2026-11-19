import React from "react";
import { MainBanner, ProductList, ProductRow, Footer } from "../components";
import { useSelector } from "react-redux";
import products from "../data/Products";
import PRow from "../components/PRow";

function Home() {
  // bg-gradient-to-b from-blue-100 to-gray-100
  return (
    <main className="overflow-y-auto flex-1  ">
      <div className="w-full min-h-screen bg-gradient-to-b from-home-grad-from to-home-grad-to flex flex-col flex-wrap rounded overflow-y-auto hide-scrollbar">
        <div className="w-full ">
          <MainBanner />
        </div>
        <div className="flex flex-col bg-blue-50 dark:bg-gray-800 pt-3">
          <h2 className="text-2xl font-medium text-left px-8 main-text">
            Shop Our Top Categories
          </h2>
          <div className="w-full">
            <ProductList products={products} />
          </div>
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
        <div className="w-full my-4">
          <PRow
            // list={"Fashion"}
            heading={"More Top Pics For You"}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Home;
