import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating({ rating, max = 5, className = "" }) {
  return (
    <div className={`flex gap-1 pb-1 px-2 text-left ${className}`}>
      {[...Array(max)].map((_, index) => {
        let star = index + 1;
        if (rating >= star) {
          return <FaStar key={index} className="text-orange-400 text-sm" />;
        }

        if (rating >= star - 0.5) {
          return (
            <FaStarHalfAlt key={index} className="text-orange-400 text-sm" />
          );
        }
        return <FaRegStar key={index} className="text-gray-600 text-sm" />;
      })}
    </div>
  );
}

export default StarRating;
