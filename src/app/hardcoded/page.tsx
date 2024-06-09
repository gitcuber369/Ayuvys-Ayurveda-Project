"use client";
import StarRatingEmpty from "@/components/StarRatingEmpty";
import ThumbsRating from "@/components/ThumbRating";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function ReviewComponent() {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [reccomendationRating, setRecommendationRating] = useState(null);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    alert(
      `Safety : ${safetyRating}, Communication : ${communicationRating} , Reccomendation : ${reccomendationRating}`
    );
  }

  return (
    <main className="pt-10 px-5 xl:text-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Leave a review</h1>
        <div>
          <h2 className="pt-10 text-2xl font-semibold">Safety</h2>
          <h3 className="text-sm  py-2 text-gray-500 font-medium">
            Rate Your Safety, Your Feedback Matters
          </h3>
          <StarRatingEmpty
            rating={communicationRating}
            setRating={setCommunicationRating}
          />
        </div>
        <div>
          <h2 className="pt-10 text-2xl font-semibold">Communication</h2>
          <h3 className="text-sm  py-2 text-gray-500 font-medium">
            Rate Your Communication, Your Feedback Matters
          </h3>
          <StarRatingEmpty rating={safetyRating} setRating={setSafetyRating} />
        </div>
        <div>
          <h2 className="pt-10 text-2xl font-semibold">Reccomendation</h2>
          <h3 className="text-sm  py-2 text-gray-500 font-medium">
            Rate Your Reccomendation, Your Feedback Matters
          </h3>
          <ThumbsRating
            rating={reccomendationRating}
            setRating={setRecommendationRating}
          />
        </div>
        <Button className="mt-5">Submit Response</Button>
      </form>
    </main>
  );
}

export default ReviewComponent;
