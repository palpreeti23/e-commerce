import React, { useRef } from "react";
import products from "../data/Products";
import { Link } from "react-router-dom";

function ProductRow({ list, heading }) {
  const scrollRef = useRef(null);
  let displayProduct = [];

  if (!list || list === "All") {
    displayProduct = products.slice(17, 23);
  } else {
    displayProduct = products
      .filter((item) => item.category === list)
      .slice(0, 5);
  }
  if (displayProduct.length === 0) return null;

  // const scroll = (direction) => {
  //   const container = scrollRef.current;
  //   const scrollAmount = 300;

  //   if (direction === "left") {
  //     container.scrollLeft -= scrollAmount;
  //   } else {
  //     container.scrollLeft += scrollAmount;
  //   }
  // };

  return (
    <div className="w-full flex flex-col h-auto bg-main-bg  text-main-text shadow-lg shadow-gray-300 dark:shadow-gray-800">
      <p className="text-2xl font-medium my-2 py-2 text-left px-8">{heading}</p>

      <div
        className="w-full flex items-center justify-around gap-2 flex-wrap"
        // ref={scrollRef}
      >
        {displayProduct.map((product) => (
          <div
            key={product.id}
            className={`${list ? "w-[230px]" : ""} w-[180px] h-auto flex-shrink-0 flex flex-wrap `}
          >
            <div className="bg-main-bg rounded-lg pb-2 shadow shadow-gray-200 dark:shadow-gray-600">
              <div className="flex flex-col">
                <Link to={`/product/${product.id}`}>
                  <div className="text-left ">
                    <img
                      className={`${list ? "w-60" : ""} w-50 h-50 object-cover rounded-xl`}
                      src={product.image}
                      alt="product image"
                    />
                    <h2 className="text-lg font-medium px-2">
                      {product.title}
                    </h2>
                  </div>
                  <p className="flex px-2">
                    See More <p> &#x2192;</p>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductRow;
