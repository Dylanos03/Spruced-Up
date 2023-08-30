import React, { useState } from "react";
import PlantBG from "../../Content/Group 12.png";
import HeroImg from "../../Content/Dresser002.webp";
import HeroImg2 from "../../Content/HeroImg2.webp";
import HeroImg3 from "../../Content/HeroImg3.webp";

import { Link } from "react-scroll";

function Hero() {
  return (
    <div
      id="Hero"
      className="bg-gradient-to-r from-ForestGreen-500 to-ForestGreen-700 flex justify-center"
    >
      <div className=" h-screen text-white flex flex-col lg:flex-row lg:gap-12 justify-center lg:items-center lg:text-left max-w-7xl">
        <div>
          <img
            src={PlantBG}
            alt="BackgroundIMG"
            className="absolute bottom-0 left-0"
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <h1 className="lg:text-5xl lg:px-0 px-8 text-3xl lg:text-left text-center my-12 font-bold">
            Affordable Wooden furniture refurbishment
          </h1>
          <div className="my-7 flex flex-col lg:flex-row text-center align-middle justify-center lg:justify-start lg:text-left lg:m-0">
            <div className="lg:mx-0">
              <Link
                className="lg:mr-4 bg-white py-4 px-8 text-ForestGreen-700 rounded-lg cursor-pointer"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                href="/"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="my-7 lg:m-0">
              <Link
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="my-10 lg:m-0 underline cursor-pointer"
                href="/"
              >
                See my previous work
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative rounded-3xl text-right w-1/2">
          <img
            src={HeroImg}
            alt="Hero"
            className=" animate-floating-1 rounded-3xl"
          />
          <img
            src={HeroImg2}
            alt="Hero2"
            className="w-64 animate-floating-2 -top-16 left-96 absolute rounded-3xl"
          />
          <img
            src={HeroImg3}
            alt="Hero3"
            className=" animate-floating-3 -left-12 top-2/3 absolute w-72 rounded-3xl "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
