import React, { useState } from "react";
import Thumbs from "./Thumbs";

const ThumbsRating = ({ rating, setRating }: any) => {
  return (
    <div className="flex gap-10">
      <Thumbs
        type="up"
        selected={rating === "up"}
        onClick={() => setRating(rating === "up" ? null : "up")}
      />
      <Thumbs
        type="down"
        selected={rating === "down"}
        onClick={() => setRating(rating === "down" ? null : "down")}
      />
    </div>
  );
};

export default ThumbsRating;
