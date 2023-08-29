import React from "react";
import { Link } from "react-scroll";
import LogoW from "../../Content/LogoLgW.png";

function Footer() {
  return (
    <div className="flex justify-center bg-gray-700">
      <div className="mt-6 bg-gray-700 p-4 py-8 max-w-6xl w-full flex flex-col items-center">
        <img src={LogoW} alt="LogoW" className="max-w-xs px-4 " />
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-48 my-9 lg:justify-around">
          <div className="flex flex-col gap-1 text-white">
            <p className="font-bold">Contact</p>
            <a href="https://www.facebook.com/SprucedUpStuff">FaceBook</a>
            <a href="https://www.instagram.com/spruced_up_stuff/">Instagram</a>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              Email
            </Link>
          </div>
          <div className="flex gap-1 flex-col text-white">
            <p className="font-bold cursor-pointer">Navigation</p>
            <Link
              to="Hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              Top
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              Services
            </Link>
          </div>
        </div>

        <a href="https://www.dylanosullivan.co.uk" className="text-white">
          Built by Dylan O'Sullivan
        </a>
      </div>
    </div>
  );
}

export default Footer;
