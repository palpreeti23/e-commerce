// import React from "react";
// import { Link } from "react-router-dom";

// function MainProductCard({ product }) {
//   return (
//     <div className="w-[240px] h-auto flex-shrink-0 mt-6">
//       <div className="bg-gray-100 rounded-lg pb-2 shadow-lg shadow-gray-500 ">
//         <div className="flex flex-col text-gray-700 ">
//           <Link to={`/product/${product.id}`}>
//             <div className="text-left px-2 py-3">
//               <img
//                 className="w-full h-60 object-fill rounded-xl"
//                 src={product.image}
//                 alt="product image"
//               />

//               <h2 className="text-lg font-medium ">
//                 Latest On {product.category}
//               </h2>
//               <p className="flex">
//                 Explore Now <p> &#x2192;</p>
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainProductCard;
import React from "react";
import { Link } from "react-router-dom";

function MainProductCard({ product }) {
  return (
    <div className="w-[240px] h-[320px] flex-shrink-0 mt-6">
      <Link to={`/product/${product.id}`}>
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900">
          {/* Top Title Section (white background) */}
          <div className="h-14 flex items-center justify-center border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-main-text capitalize">
              {product.category}
            </h2>
          </div>

          {/* Image Section (pushed down) */}
          <div className="h-[calc(100%-56px)] flex items-center justify-center p-3">
            <img
              src={product.image}
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MainProductCard;
