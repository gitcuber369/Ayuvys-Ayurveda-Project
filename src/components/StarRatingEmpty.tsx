"use client";
import React, { useState } from "react";
import StarRating from "./StarRating";

export default function StarRatingEmpty({
  totalStars = 5,
  rating,
  setRating,
}: any) {
  const [hover, SetHover] = useState(0);

  return (
    <div className="flex gap-3 text-4xl">
      {[...Array(totalStars)].map((element, index, array) => {
        return (
          <StarRating
            key={index + 1}
            onMouseEnter={() => {
              SetHover(index + 1);
            }}
            onMouseLeave={() => {
              SetHover(0);
            }}
            onClick={() => {
              setRating(index + 1);
            }}
            filled={index < (hover || rating)}
          />
        );
      })}
    </div>
  );
}
