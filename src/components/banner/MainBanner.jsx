import React from "react";
import products from "../../data/Products";

function MainBanner() {
  const productImg = products[6];
  return (
    <div className=" w-full h-auto bg-blue-100 shadow shadow-lg shadow-gray-300 rounded-lg">
      <div className="w-full h-80 flex items-center">
        <div className="w-2/3 flex flex-col items-center justify-center font-serif ">
          <h2 className="text-4xl font-bold w-60 text-left my-2">
            FASHION <span className="">FINDS</span>
          </h2>
          <p className=" text-gray-700 my-1 text-sm w-60 text-left">
            DISCOVER UNBEATABLE DEALS ON TRENDY CLOTHING
          </p>
          <button className="px-3 py-2 border rounded-lg bg-black text-white text-sm my-2 mr-35">
            Shop Now
          </button>
        </div>
        <div className="w-1/3 ">
          <img
            className="w-90 h-70 rounded object-fill "
            src={productImg.image}
            alt="imag"
          />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
