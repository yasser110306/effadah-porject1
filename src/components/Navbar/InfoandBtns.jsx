import React from "react";
import { Link } from "react-router-dom";
import { Globe, Mail, Phone } from "lucide-react";

function InfoandBtns() {
  return (
    <div className=" flex flex-col  justify-start lg:justify-between h-full ">
      <div id="contact-nav" className=" gap-4 text-white hidden lg:flex">
        <p>
          En <Globe size={16} />
        </p>
        <p>
          <Mail size={16} /> info@efadh.com.sa
        </p>
        <p>
          <Phone size={16} /> 920008831
        </p>
      </div>
      <div id="log-sign-btns" className=" flex gap-3 ">
        <Link to="logIn">
          <button className="text-white px-4 py-2 bg-tarnsparent border-2 rounded-lg text-sm lg:text-base">
            تسجيل الدخول
          </button>
        </Link>
        <Link to="/signIn">
          <button className="text-white px-4 py-2  bg-primary rounded-lg border-primary border-2 text-sm lg:text-base">
            تسجيل
          </button>
        </Link>
      </div>
    </div>
  );
}

export default InfoandBtns;
