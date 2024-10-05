import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/Reviewh.jpeg";
import img2 from "../assets/img/ReviewJD.jpeg";
import img3 from "../assets/img/Reviewl.jpeg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="HeisenBerg" />
        <ReviewCard img={img2} name="JD" />
        <ReviewCard img={img3} name="Leo Das" />
      </div>
    </div>
  );
};

export default Review;

