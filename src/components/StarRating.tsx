import React from "react";

const StarRating = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
  filled,
}: any) => {
  return (
    <div
      className={`flex cursor-pointer ${
        filled ? "text-yellow-400" : "text-gray-400"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      &#9733;
    </div>
  );
};

export default StarRating;
