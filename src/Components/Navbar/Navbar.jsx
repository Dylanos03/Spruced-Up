import React, { useRef, useState } from "react";
import "../../index.css";
import Logo from "../../Content/LogoLgW.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  let Icon = faX;
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(faBars);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    const Dropdown = DropdownRef.current;
    const Navbar = NavbarRef.current;
    Dropdown.classList.toggle("hidden");
    setOpen(!open);
    if (!open) {
      Navbar.classList.add("bg-ForestGreen-500");
    } else {
      if (window.scrollY < 90) {
        Navbar.classList.remove("bg-ForestGreen-500");
      }
    }
  };

  function navChange() {
    const Dropdown = DropdownRef.current;
    const Navbar = NavbarRef.current;
    if (window.scrollY >= 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", navChange);

  const DropdownRef = useRef(null);
  const NavbarRef = useRef(null);

  return (
    <nav id="Navbar" className={" fixed top-0 z-50  w-full  "}>
      <div
        ref={NavbarRef}
        className={
          scrolled
            ? "min-w-screen-xl lg:flex flex-wrap items-center justify-evenly mx-auto p-4 gap-24 align-middle absolute w-full pt-8 lg:pt-4 bg-ForestGreen-500"
            : "min-w-screen-xl lg:flex flex-wrap items-center justify-evenly mx-auto p-4 gap-24 align-middle absolute w-full pt-8 lg:pt-4"
        }
      >
        <div className="flex justify justify-between">
          <img src={Logo} alt="" className="h-8" />
          <FontAwesomeIcon
            icon={open ? faX : faBars}
            color="white"
            className="lg:hidden h-8 cursor-pointer w-12"
            onClick={handleClick}
          />
        </div>
        <ul
          id="Menu"
          ref={DropdownRef}
          className="lg:flex lg:flex-row flex-col flex-wrap justify-between gap-16 items-center text-white text-left  lg:bg-transparent bg-ForestGreen-500 hidden my-8 lg:my-4"
        >
          <li className="lg:my-0 my-4 ">
            <a href="#">Home</a>
          </li>
          <li className="lg:my-0 my-4 ">
            <a href="#">About</a>
          </li>
          <li className="lg:my-0 my-4 ">
            <a href="#">Services</a>
          </li>
          <li className="lg:my-0 my-4 ">
            <a href="#">Portfolio</a>
          </li>
          <li className="lg:my-0 my-12">
            <a
              href="#"
              className="text-ForestGreen-500 bg-white px-6 py-2 rounded-md "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
