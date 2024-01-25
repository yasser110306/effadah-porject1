import React from "react";
import { Link } from "react-router-dom";

function MobileMenuLinks() {
  return (
    <ul
      className=" text-right flex-col  bg-white py-2 px-5 rounded-lg flex "
      id="nav-menu"
    >
      <li>
        <Link to="/Home" className=" hover:text-primary">
          الصفحة الرئيسية
        </Link>
      </li>
      <li>
        <Link to="/aboutUs" className=" hover:text-primary">
          عن الشركة
        </Link>
      </li>
      <li>
        <Link to="/services" className=" hover:text-primary">
          خدماتنا
        </Link>
      </li>

      <li>
        <Link to="/hiring" className=" hover:text-primary">
          توظيف
        </Link>
      </li>

      <li>
        <Link to="/sales" className=" hover:text-primary">
          عروض
        </Link>
      </li>

      <li>
        <Link to="/contact" className=" hover:text-primary">
          اتصل بنا
        </Link>
      </li>
    </ul>
  );
}

export default MobileMenuLinks;
