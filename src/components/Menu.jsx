import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/amer.jpeg";
import menu2 from "../assets/img/COFFEE.jpeg";
import menu3 from "../assets/img/capcuino.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Special Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Americano" price="$10" />
        <DishesCard img={menu2} title="Black Coffee" price="$14.2" />
        <DishesCard img={menu3} title="Cappuccino" price="$13.3" />
      </div>
    </div>
  );
};

export default Menu;
