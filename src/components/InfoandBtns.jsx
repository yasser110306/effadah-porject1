import React from "react";
import { Link } from "react-router-dom";

function InfoandBtns() {
  return (
    <div className=" flex flex-col justify-between h-full  self-stretch">
      <div id="contact-nav" className="flex gap-4 text-white">
        <p>
          En <i className="fa-solid fa-globe"></i>
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> info@efadh.com.sa
        </p>
        <p>
          <i className="fa-solid fa-phone"></i> 920008831
        </p>
      </div>
      <div id="log-sign-btns" className=" flex gap-3 items-center">
        <Link to="logIn">
          <button className="text-white px-4 py-2 bg-tarnsparent border-2 rounded-lg">
            تسجيل الدخول
          </button>
        </Link>
        <Link to="/signIn">
          <button className="text-white px-4 py-2  bg-primary rounded-lg border-primary border-2">
            تسجيل
          </button>
        </Link>
      </div>
    </div>
  );
}

export default InfoandBtns;
