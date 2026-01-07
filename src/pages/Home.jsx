import React from "react";
import { ProductList } from "../components";
import { useSelector } from "react-redux";
import products from "../data/Products";

function Home() {
  const selectCategory = useSelector((state) => state.filter.category);
  const productCategory =
    selectCategory === "All"
      ? products
      : products.filter((items) => items.category === selectCategory);

  console.log("selected", selectCategory);
  return (
    <main className="overflow-y-auto flex-1 ">
      <div className="w-full h-[100vh] bg-gray-600 flex flex-col flex-wrap rounded overflow-y-auto hide-scrollbar">
        <div className="w-full h-[60%] ">
          <img
            className="w-full h-90 rounded"
            src="src/img/bgsale.jpg"
            alt=""
          />
        </div>
        <div className="h-[40%]">
          <ProductList products={productCategory} />
        </div>
      </div>
    </main>
  );
}

export default Home;
