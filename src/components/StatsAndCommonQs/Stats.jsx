import React from "react";
import statsBg from "../../assets/statsBg.png";
import SeeMore from "../reuse/SeeMore";
import State from "./State";
import state1Img from "../../assets/state1.png";
import state2Img from "../../assets/state2.png";
import state3Img from "../../assets/state3.png";
import state4Img from "../../assets/state4.png";

function Stats() {
  return (
    <div className=" relative flex flex-col items-center xl-max:mt-28 container">
      <div
        id="stats"
        className=" xl-max:hidden flex items-center overflow-hidden gap-10  justify-between w-full mt-24 relative"
      >
        <img
          className=" absolute -right-96 -bottom-96"
          src={statsBg}
          alt="stats"
        />
        <div className=" text-right flex flex-col items-end z-10 text-white">
          <h2 className=" mb-6 text-3xl font-semibold">احصائياتنا تتحدث</h2>
          <p className=" w-3/4 ">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها
          </p>
        </div>
        <div className=" z-10 p-10 text-white">
          <SeeMore span1="أبرز" span2="إنجازات" span3="الشركة" noBtn="yes" />
        </div>
      </div>
      <div
        id="stats-container"
        className="  lg:grid-cols-2 grid-cols-1  xl:grid-cols-4 left-0 pl-20  grid gap-10 -bottom-40 absolute xl-max:static xl-max:p-0 xl-max:  justify-between xl-max:w-full w-3/4 "
      >
        <State image={state1Img} content="+1224" stateName="الحالات المكتملة" />
        <State image={state2Img} content="+32" stateName="أعضاء الفريق" />
        <State image={state3Img} content="+15" stateName="سنوات خبرة" />
        <State
          image={state4Img}
          content="+1475"
          stateName="زبائن يشعرون بالرضى"
        />
      </div>
    </div>
  );
}

export default Stats;
