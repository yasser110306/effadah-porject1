import React from "react";
import { ArrowLeft } from "lucide-react";

function Field(props) {
  const FieldImg = props.image;
  const FieldImgAlt = props.imageAlt;
  const FieldName = props.name;
  const customImg = props.customImg;
  return (
    <div className="field flex flex-col items-center gap-4 bg-white p-10 relative rounded-2xl h-80 lg:w-1/4 overflow-hidden">
      <div className=" absolute -right-10 -bottom-8 ">
        {customImg && <img src={customImg} alt="custom" />}
      </div>
      <div className=" w-28 flex-1 items-center z-10">
        <img src={FieldImg} alt={FieldImgAlt} />
      </div>
      <p className="z-10">{FieldName}</p>
      <div className=" z-10 border-2 py-1 px-2 rounded-lg border-primary  text-primary hover:bg-primary hover:text-white ">
        <ArrowLeft size={16} className="" />
      </div>
    </div>
  );
}

export default Field;
