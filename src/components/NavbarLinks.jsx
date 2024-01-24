import React from "react";
import { Link } from "react-router-dom";

function NavbarLinks() {
  return (
    <div
      id="nav-links"
      className=" text-white flex gap-5 flex-row-reverse flex-1 self-end"
    >
      <Link to="/Home" className=" hover:text-primary">
        الصفحة الرئيسية
      </Link>
      <Link to="/aboutUs" className=" hover:text-primary">
        عن الشركة
      </Link>
      <Link to="/services" className=" hover:text-primary">
        خدماتنا
      </Link>
      <Link to="/hiring" className=" hover:text-primary">
        توظيف
      </Link>
      <Link to="/sales" className=" hover:text-primary">
        عروض
      </Link>
      <Link to="/contact" className=" hover:text-primary">
        اتصل بنا
      </Link>
    </div>
  );
}

export default NavbarLinks;
