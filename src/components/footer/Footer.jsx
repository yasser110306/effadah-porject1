import React from "react";
import footerBg from "../../assets/footerBg.png";
import FollowUs from "./FollowUs";
import ContactFooter from "./ContactFooter";
import CommonPages from "./CommonPages";
import CopyRight from "./CopyRight";

function Footer() {
  return (
    <div className=" footer mt-28 relative overflow-hidden -z-10 p-10 ">
      <div className=" absolute bottom-0 -z-10 -right-40">
        <img src={footerBg} alt="footerBg" />
      </div>
      <div className="container -z-10 flex justify-between md-max:justify-center">
        <FollowUs />
        <ContactFooter />
        <CommonPages />
        <CopyRight />
      </div>
    </div>
  );
}

export default Footer;
