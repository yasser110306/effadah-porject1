import React from "react";
import { Link } from "react-router-dom";

function MobileMenuLinks() {
  return (
    <ul
      className=" text-right flex-col   bg-white py-2 px-5 rounded-lg flex absolute top-20 w-full right-0   "
      id="nav-menu"
    >
      <li>
        <Link to="/" className=" hover:text-primary">
          الصفحة الرئيسية
        </Link>
      </li>
      <li>
        <a href="#knowUs" className=" hover:text-primary">
          عن الشركة
        </a>
      </li>
      <li>
        <a href="#sectors" className=" hover:text-primary">
          خدماتنا
        </a>
      </li>

      <li>
        <Link to="/" className=" hover:text-primary">
          توظيف
        </Link>
      </li>

      <li>
        <Link to="/" className=" hover:text-primary">
          عروض
        </Link>
      </li>

      <li>
        <a href="#contactUs" className=" hover:text-primary">
          اتصل بنا
        </a>
      </li>
    </ul>
  );
}

export default MobileMenuLinks;
