import React from "react";
import products from "../data/Products";
import StarRating from "./StarRating";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart, setBuyNow } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ProductRow from "./ProductRow";
import { showAlert } from "../store/Alert";
import { toggleWishList } from "../store/WishListSlice";

function ProductDetail() {
  const { id } = useParams();
  const productInfo = products.find((item) => item.id === Number(id));
  const arr = productInfo.highlight;
  const list = productInfo.category;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishList = useSelector((state) => state.wishlist.item);
  const wishlisted = wishList.some((item) => item.id === productInfo.id);

  const handleBuyNow = () => {
    dispatch(setBuyNow(productInfo));
    navigate("/order");
  };

  const finalPrice = Math.round(
    productInfo.price - (productInfo.price * productInfo.discount) / 100,
  );

  return (
    <div className="w-full h-auto bg-gray-200 dark:bg-gray-800 text-main-text ">
      <div className="flex flex-col flex-wrap ">
        <div className="flex flex-col justify-around md:flex-row bg-main-bg mt-1 mb-5">
          <div className="w-full md:w-[30%] h-auto flex justify-center items-center  ">
            <img
              className="w-full h-auto object-contain rounded"
              src={productInfo.image}
              alt="image"
            />
          </div>
          <div className="flex flex-col text-left py-2 w-full md:w-2/3 px-5">
            <h2 className="font-bold text-2xl py-2">{productInfo.title}</h2>
            <p className=" flex text-lg ">
              <span className="line-through text-orange-400 pr-2">
                ₹{productInfo.price}
              </span>
              <span className="text-green-500">₹{finalPrice}</span>
            </p>
            <p className="text-red-400">{productInfo.discount}% Off</p>
            <StarRating rating={productInfo.rating} className="text-left" />
            <p className="w-2/3 py-1 ">{productInfo.description}</p>
            <ul className="px-6 list-disc w-2/3">
              {arr.map((items) => (
                <li key={items} className="">
                  {items}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                dispatch(toggleWishList(productInfo));
                dispatch(
                  showAlert({
                    message: wishlisted
                      ? "Removed from wishlist!"
                      : "Added to wishlist!",
                    type: "success",
                  }),
                );
              }}
              className="w-2/3 md:w-1/4 rounded py-1 px-4 mx-1 my-2 text-center bg-main-bg border border-gray-300 text-main-text cursor-pointer"
            >
              Add To Wishlist
            </button>
            <button
              onClick={() => {
                dispatch(addToCart(productInfo));
                dispatch(
                  showAlert({ message: "Added to the cart!", type: "success" }),
                );
              }}
              className="w-2/3 md:w-1/4 bg-orange-400 hover:bg-orange-500 shadow-sm shadow-orange-500 rounded flex justify-center gap-1 py-1 px-4 mx-1 my-2 flex-wrap"
            >
              <span>
                <FiShoppingCart size={20} />
              </span>
              <p>Add To Cart</p>
            </button>

            <button
              onClick={handleBuyNow}
              className="w-2/3 md:w-1/4 bg-yellow-500 hover:bg-yellow-600 shadow-sm shadow-yellow-500 rounded py-1 px-4 mx-1 my-2 text-center "
            >
              Buy Now
            </button>
          </div>
        </div>
        <ProductRow list={list} heading="Similar Products" />
      </div>
    </div>
  );
}

export default ProductDetail;
