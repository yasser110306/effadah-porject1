import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
function NavbarLinks({ id }) {
  return (
    <>
      <div
        id={id}
        className=" text-white  gap-5 flex-row-reverse flex-1 self-end hidden lg:flex"
      >
        <Link to="/" className=" hover:text-primary">
          الصفحة الرئيسية
        </Link>
        <a href="#knowUs" className=" hover:text-primary">
          عن الشركة
        </a>
        <a href="#sectors" className=" hover:text-primary">
          خدماتنا
        </a>
        <Link to="/" className=" hover:text-primary">
          توظيف
        </Link>
        <Link to="/" className=" hover:text-primary">
          عروض
        </Link>
        <a href="#contactUs" className=" hover:text-primary">
          اتصل بنا
        </a>
      </div>
      <MobileMenu id={id + "-mobile"} />
    </>
  );
}

export default NavbarLinks;
