import React from "react";
import { ArrowLeft } from "lucide-react";

function Field(props) {
  const FieldImg = props.image;
  const FieldImgAlt = props.imageAlt;
  const FieldName = props.name;
  const customImg = props.customImg;
  return (
    <div className="field flex flex-1  flex-col items-center gap-4 bg-white p-10 relative rounded-2xl sm-max:h-60 sm-max:w-full h-80 overflow-hidden hover:scale-110 transition-all">
      <div className=" absolute -right-10 -bottom-8 ">
        {customImg && <img src={customImg} alt="custom" />}
      </div>
      <div className=" w-16 sm sm:w-28 flex-1 items-center z-10">
        <img src={FieldImg} alt={FieldImgAlt} />
      </div>
      <p className="z-10">{FieldName}</p>
      <div className=" transition-all cursor-pointer z-10 border-2 py-1 px-2 rounded-lg border-primary  text-primary hover:bg-primary hover:text-white ">
        <ArrowLeft size={16} className="" />
      </div>
    </div>
  );
}

export default Field;
