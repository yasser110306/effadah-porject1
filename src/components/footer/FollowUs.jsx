import React from "react";
import SeeMore from "../reuse/SeeMore";
import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";
import appStoreLink from "../../assets/appStoreLink.png";
import googlePlaylink from "../../assets/googlePlaylink.png";

function FollowUs() {
  return (
    <div className=" text-white flex flex-col items-end gap-10">
      <div className="flex flex-col items-end gap-2 md-max:items-center md-max:w-full">
        <h2 className=" text-right text-xl">تابعنا عبر</h2>
        <hr className="custom-hr self-end w-1/2 md-max:w-full border-primary border" />
      </div>
      <div className=" social-links flex flex-col gap-5  ">
        <div className=" flex items-center   justify-end gap-3">
          <p>تابعنا عبر الفيسبوك</p>
          <Facebook fill="#C89B2C" strokeWidth={0} />
        </div>
        <div className=" flex items-center  justify-end gap-3">
          <p>تابعنا عبر تويتر</p>
          <Twitter fill="#C89B2C" strokeWidth={0} />
        </div>
        <div className=" flex items-center  justify-end gap-3">
          <p>تابعنا عبر إنستجرام</p>
          <Instagram color="#C89B2C" />
        </div>
        <div className=" flex items-center  justify-end gap-3">
          <p>تابعنا عبر اليوتيوب</p>
          <Youtube color="#C89B2C" />
        </div>
      </div>
      <p className=" text-primary md-max:text-center md-max:w-full">
        قم بتحميل التطبيق الآن
      </p>
      <div id="app-link-mobile" className="flex gap-3 justify-center">
        <a href="/">
          <img src={appStoreLink} alt="appStoreLink" className=" w-36" />
        </a>
        <a href="/">
          <img src={googlePlaylink} alt="googlePlaylink" className=" w-40" />
        </a>
      </div>
    </div>
  );
}

export default FollowUs;
