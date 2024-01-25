import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenuLinks from "./MobileMenuLinks";

function MobileMenu() {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenu = () => {
    if (!isOpened) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  };

  return (
    <div
      id="menu-mobile-container"
      className=" list-none flex  lg:hidden self-start  flex-col items-end z-30"
    >
      <Menu
        size={30}
        className=" text-white hover:text-primary hover:cursor-pointer"
        id="menu-active-btn"
        onClick={handleMenu}
      />
      {isOpened && <MobileMenuLinks />}
    </div>
  );
}

export default MobileMenu;
