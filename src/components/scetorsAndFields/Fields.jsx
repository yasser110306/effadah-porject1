import React from "react";
import Field from "./Field";
import field1Img from "../../assets/field1.png";
import field2Img from "../../assets/field2.png";
import field3Img from "../../assets/field3.png";
import field4Img from "../../assets/field4.png";
import logoBg from "../../assets/customBg.png";
import sec2bg from "../../assets/sec2bg.png";
import SeeMore from "../reuse/SeeMore";
import ToggleBtns from "../reuse/ToggleBtns";

function Fields() {
  return (
    <>
      <div className="-z-10 absolute -left-96 top-56 ">
        <img src={sec2bg} alt="hero-sec-logo" className="   hidden lg:block " />
      </div>
      <div className="flex items-center gap-11">
        <div className=" flex items-center gap-5 flex-1 z-20">
          <Field image={field4Img} imageAlt="field1Img" name="القطاع الطبي" />
          <Field image={field3Img} imageAlt="field2Img" name="قطاع الأعمال" />
          <Field
            image={field2Img}
            imageAlt="field2Img"
            name="عمالة منزلية بالتأجير الشهري"
          />
          <Field
            customImg={logoBg}
            image={field1Img}
            imageAlt="field2Img"
            name="عمالة منزلية بالساعة"
          />
        </div>
        <SeeMore span1="مجالات" span2="وقطاعات" span3="الأعمال" />
      </div>
      <ToggleBtns />
    </>
  );
}

export default Fields;
