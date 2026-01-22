import React, { useEffect } from "react";
import products from "../data/Products";
import { MainBanner, ProductCardList, ProductRow } from "../components";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

function ItemsPage() {
  // const { searchQuery, setSearchQuery } = useOutletContext() || {};
  const outletContext = useOutletContext() || {};
  const searchQuery = outletContext.searchQuery ?? "";
  const setSearchQuery = outletContext.setSearchQuery ?? (() => {});
  const selectCategory = useSelector((state) => state.filter.category);
  let finalproduct = products;

  console.log(finalproduct);
  useEffect(() => {
    if (selectCategory !== "All") {
      setSearchQuery("");
    }
  }, [selectCategory]);

  if (selectCategory !== "All") {
    finalproduct = finalproduct.filter(
      (product) => product.category === selectCategory
    );
  }

  if (searchQuery !== "") {
    finalproduct = finalproduct.filter((product) =>
      product.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(finalproduct);
  }

  let itemCat = "";
  if (selectCategory === "All") {
    itemCat = "";
  } else if (selectCategory === "Fashion") {
    itemCat = "Books";
  } else if (selectCategory === "Books") {
    itemCat = "Home & Kitchen";
  } else if (selectCategory === "Electronics") {
    itemCat = "Fashion";
  } else {
    itemCat = "Electronics";
  }

  return (
    <main className="overflow-y-auto flex-1  ">
      <div className="w-full min-h-screen bg-gray-100 flex flex-col  flex-wrap rounded overflow-y-auto hide-scrollbar py-5 ">
        <div className="w-full space-y-4 ">
          {finalproduct.length > 0 ? (
            <ProductCardList products={finalproduct} />
          ) : (
            <p>No product found</p>
          )}
        </div>
        <div className="w-full my-8">
          {selectCategory !== "All" && searchQuery === "" && (
            <ProductRow
              list={itemCat}
              heading={"You Also Might Be Interested In"}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default ItemsPage;
