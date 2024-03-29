import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import GetStartedButton from "../GetStartedButton";
import NavLinks from "./NavLinks";
import { IonIcon } from "@ionic/react";

const Navbar = () => {
const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <IonIcon name={`${open ? "close" : "menu"}`}></IonIcon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-4 font-[Poppins]">
          <li>
            <a href="/" className="py-7 px-2 inline-block">
              Home
            </a>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <GetStartedButton/>
        </div>

        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0 z-50" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <GetStartedButton/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;