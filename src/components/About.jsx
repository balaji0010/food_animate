import React from "react";
import img from "../assets/img/COFFEE1.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Engala maari Yaaraliyumae Coffee Poda Mudiyaadhu , Naanga dhaan da best eppiyumae, <strong>"Nama dhaan"</strong> Gokka makka apdii erukkum 
        </p>
        <p>
          Nanbargalae Coffeee Kudikka vaanga Nanbargalae 
          <strong>Veeramani </strong> Solrenla 
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
