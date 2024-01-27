import React from "react";
import Pros from "../reuse/Pros";
import pros1 from "../../assets/pros1.png";
import pros2 from "../../assets/pros2.png";
import pros3 from "../../assets/pros3.png";
import pros4 from "../../assets/pros4.png";
import whiteLogo from "../../assets/whiteLogo.png";
import SeeMore from "../reuse/SeeMore";
import bgImage from "../../assets/knowusSec2.png";

function KnowUs() {
  return (
    <div className=" mt-24 relative flex justify-end items-center">
      <div className=" flex items-center">
        <div className="pros bg-white w-1/2  left-0 z-10  p-8 rounded-2xl flex flex-col items-end text-right gap-10 absolute xl-max:static  xl-max:w-full xl-max:items-center">
          <p className=" w-3/4">
            . لاشك أن مشوار الألف ميل يبدأ بخطوة واحدة نحـن فـي شركـة أفـادة
            للمــوارد البشريـة بعـون الله تعالـي قد بـدأنـا هذا المـشـوار ،
            ووضعـنا نصـب أعيننا رؤية مستقبلية واضحه وهي تقديم خدمة راقية في مجال
            توريد العمالة بصورة قائمة على أحـدث النظـم التـي تتلاءم مع ثقافتنـا
            وتقالـيدنـا وتتماشي مـع مـا تتطلبـه المرحلـة القادمـة ورؤيـة 2030
          </p>
          <div className=" flex gap-3 xl-max:flex-wrap sm-max:justify-center sm-max:text-center ">
            <Pros image={pros1} name="تطوير" />
            <Pros image={pros2} name="مهنية" />
            <Pros image={pros3} name="جودة" />
            <Pros image={pros4} name="روؤية" />
          </div>
        </div>
      </div>
      <div
        id="sec2-know-us"
        className=" items-end justify-end py-40 px-20 relative xl-max:hidden w-2/3 flex rounded-3xl"
      >
        <div className=" flex justify-center flex-1">
          <img src={whiteLogo} alt="logo" className=" w-1/3" />
        </div>
        <div className=" text-white ">
          <SeeMore
            span1="تعرف"
            span2="علي"
            span3="الشركة"
            noBtn="yes"
            id="know-us"
          />
        </div>
      </div>
    </div>
  );
}

export default KnowUs;
