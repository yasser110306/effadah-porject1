import React from "react";
import appStoreLink from "../../assets/appStoreLink.png";
import googlePlaylink from "../../assets/googlePlaylink.png";

function HomePageInfo() {
  return (
    <div className="flex-1 text-center text-white z-20 flex flex-col justify-center gap-2">
      <h2 className=" font-bold text-2xl mb-2">
        تحسين الإنتاجية في مكان العمل
      </h2>
      <p>
        لتحقيق النجاح في العمل اليوم ، يجب أن تكون
        <span className=" block"> مرنًا وأن يكون لديك تخطيط جيد</span>
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

export default HomePageInfo;
