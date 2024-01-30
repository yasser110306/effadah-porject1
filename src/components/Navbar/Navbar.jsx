import React from "react";
import NavbarLinks from "./NavbarLinks";
import coloredLogo from "../../assets/colored-logo.png";
import InfoandBtns from "./InfoandBtns";
import { Link } from "react-router-dom";

function Navbar({ id }) {
  return (
    <div className=" absolute left-0 w-full  z-50 ">
      <div className="container py-5 p-4 w-full flex gap-5 lg:items-stretch h-40   justify-between items-start">
        <InfoandBtns id={id + "-btns"} />
        <NavbarLinks id={id + "-links"} />
        <Link to="/">
          <img src={coloredLogo} alt="logo" className=" w-28 hidden lg:block" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
