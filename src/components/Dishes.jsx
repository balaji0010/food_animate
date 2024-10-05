import React from "react";
import img1 from "../assets/img/capcuino.jpg";
import img2 from "../assets/img/expresso.jpeg";
import img3 from "../assets/img/amer.jpeg";
import img4 from "../assets/img/mocha.jpg";
import img5 from "../assets/img/download.jpeg";
import img6 from "../assets/img/latte.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Coffee
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Cappuccino" price="$10.99" />
        <DishesCard img={img2} title="Expresso" price="$12.99" />
        <DishesCard img={img3} title="Americano" price="$10.99" />
        <DishesCard img={img4} title="Mocha Coffee" price="$11.99" />
        <DishesCard img={img5} title="Black Coffee" price="$10.99" />
        <DishesCard img={img6} title="Latte" price="$12.99" />
      </div>
    </div>
  );
};

export default Dishes;
