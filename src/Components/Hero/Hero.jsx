import React from "react";
import PlantBG from "../../Content/Group 12.png";
import HeroImg from "../../Content/Dresser002.jpeg";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-ForestGreen-500 to-ForestGreen-700 flex justify-center">
      <div className=" h-screen text-white flex flex-col lg:flex-row lg:gap-12 justify-center lg:items-center lg:text-left max-w-7xl">
        <div>
          <img
            src={PlantBG}
            alt="BackgroundIMG"
            className="absolute bottom-0 left-0"
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h1 className="lg:text-5xl text-3xl lg:text-left text-center my-12 font-bold">
            Affordable Wooden furniture refurbishment
          </h1>
          <div className="my-7 flex flex-col lg:flex-row text-center align-middle justify-center lg:justify-start lg:text-left lg:m-0">
            <div className="lg:mx-0">
              <a
                href="#"
                className="lg:mr-4 bg-white py-4 px-8 text-ForestGreen-700 rounded-lg"
              >
                Book a consultation
              </a>
            </div>
            <div className="my-7 lg:m-0">
              <a href="#" className="my-10 lg:m-0 underline">
                See my previous work
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block rounded-3xl text-right w-1/2">
          <img src={HeroImg} alt="Hero" className=" rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
