import React from "react";
import Navbar from "../Navbar/Navbar";
import sec2bg from "../../assets/sec2bg.png";
import SeeMore from "../reuse/SeeMore";
import { Link } from "react-router-dom";

function LogIn({ type }) {
  return (
    <>
      <img
        src={sec2bg}
        alt="bg"
        className=" absolute -z-10 -left-96 -bottom-40"
      />
      <Navbar id="nav-bar" />
      <div className=" mb-40 pt-40">
        <div className="container flex flex-col items-end gap-10 mt-20">
          <SeeMore noBtn="yes" span1={`تسجيل الدخول كـ ${type}`} />
          <div className=" border rounded-2xl flex  flex-col items-stretch p-5 gap-5  self-center">
            <form className=" flex flex-col items-end gap-4">
              <div className=" flex flex-col items-end gap-3 w-full ">
                <label htmlFor="e-mail">البريد الإلكتروني</label>
                <input
                  placeholder="البريد الإلكتروني"
                  type="email"
                  id="e-mail"
                  className=" w-full p-2 border rounded-lg outline-none text-right "
                />
              </div>
              <div className=" flex flex-col items-end gap-3 w-full ">
                <label htmlFor="password">كلمة المرور</label>
                <input
                  placeholder="كلمة المرور"
                  type="password"
                  id="password"
                  className=" w-full p-2 border rounded-lg outline-none text-right "
                />
              </div>
              <div className="w-full justify-between flex ">
                <p>نسيت كلمة المرور ؟</p>
                <div className=" flex gap-2 items-center">
                  <label htmlFor="remember">تذكرني</label>
                  <input type="checkbox" id="remember" />
                </div>
              </div>
              <Link
                to="/"
                className=" w-96 p-2 sm-max:w-64 bg-secondry text-center text-white rounded-md"
              >
                <input type="submit" value="تسجيل الدخول" />
              </Link>
            </form>
            <p className=" text-center">
              ليس لديك حساب ؟ <span className=" text-primary">تسجيل جديد</span>
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default LogIn;
