import React from "react";
import LogoW from "../../Content/LogoLgW.png";

function Footer() {
  return (
    <div className="flex justify-center bg-gray-700">
      <div className="mt-6 bg-gray-700 p-4 py-8 max-w-6xl w-full flex flex-col items-center">
        <img src={LogoW} alt="LogoW" className="max-w-xs px-4 " />
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-48 my-9 lg:justify-around">
          <div className="flex flex-col gap-1 text-white">
            <p className="font-bold">Contact</p>
            <a href="#">FaceBook</a>
            <a href="#">Instagram</a>
            <a href="#">Email</a>
          </div>
          <div className="flex gap-1 flex-col text-white">
            <p className="font-bold">Navigation</p>
            <a href="#">Top</a>
            <a href="#">About</a>
            <a href="#">Services</a>
          </div>
        </div>

        <a href="#" className="text-white">
          Built by Dylan O'Sullivan
        </a>
      </div>
    </div>
  );
}

export default Footer;
