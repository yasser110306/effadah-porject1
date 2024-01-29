import React from "react";
import location from "../../assets/location.png";
import SeeMore from "../reuse/SeeMore";

function ContactUs() {
  return (
    <div className="mt-28 container flex items-center px-0 gap-20">
      <div className="   flex-1 flex gap-10">
        <img
          src={location}
          alt="location"
          className="location rounded-xl overflow-hidden 2xl-max:hidden"
        />

        <form className="  contact-form flex flex-col items-end flex-1 p-10 gap-8">
          <div>
            <p className=" text-center p-4 font-semibold text-2xl block w-full md:hidden ">
              تواصل معنا
            </p>
            <label htmlFor="user-name">اسمك الشخصي</label>
            <input
              required
              placeholder="ادخل اسمك الشخصي"
              type="text"
              id="user-name"
            />
          </div>
          <div>
            <label htmlFor="nick-name">الكنية</label>
            <input
              required
              placeholder="ادخل الكنية"
              type="text"
              id="nick-name"
            />
          </div>
          <div>
            <label htmlFor="e-mail">بريدك الإلكتروني</label>
            <input
              required
              placeholder="ادخل بريدك الإلكتروني"
              type="email"
              id="e-mail"
            />
          </div>
          <div>
            <label htmlFor="message">رسالتك</label>
            <textarea
              required
              placeholder=".. اكتب رسالتك هنا"
              id="message"
            ></textarea>
          </div>
          <input type="submit" value="إرسال" />
        </form>
      </div>
      <SeeMore span1="تواصل" span2="معنا" span3="الآن" noBtn="yes" />
    </div>
  );
}

export default ContactUs;
