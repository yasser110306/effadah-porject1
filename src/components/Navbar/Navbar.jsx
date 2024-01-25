import React from "react";
import NavbarLinks from "./NavbarLinks";
import coloredLogo from "../../assets/colored-logo.png";
import InfoandBtns from "./InfoandBtns";

function Navbar() {
  return (
    <div className=" container relative py-5 p-4 w-full flex gap-5 lg:items-stretch h-40  justify-between items-center z-50 ">
      <InfoandBtns />
      <NavbarLinks />
      <img src={coloredLogo} alt="logo" className=" w-28 hidden lg:block" />
    </div>
  );
}

export default Navbar;
