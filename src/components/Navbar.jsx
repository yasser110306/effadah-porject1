import React from "react";
import NavbarLinks from "./NavbarLinks";
import coloredLogo from "../assets/colored-logo.png";
import InfoandBtns from "./InfoandBtns";

function Navbar() {
  return (
    <div className=" container  py-5 p-4 w-full flex gap-5 items-stretch h-40">
      <InfoandBtns />
      <NavbarLinks />
      <img src={coloredLogo} alt="logo" className=" w-28" />
    </div>
  );
}

export default Navbar;
