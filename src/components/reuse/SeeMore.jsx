import React from "react";
import { ArrowLeft } from "lucide-react";

function SeeMore({ span1, span2, span3, noBtn, id }) {
  return (
    <div className="hidden flex-col gap-5 md:flex">
      <h2 id={id} className="text-right text-5xl">
        <span className="block">{span1}</span>
        <span className="block">{span2}</span>
        <span className="block">{span3}</span>
      </h2>
      <hr className="custom-hr self-end w-1/2 border-primary border" />
      {!noBtn && (
        <div
          id="see-more-btn"
          className="flex items-center gap-10 p-2 border-2 border-primary rounded-lg"
        >
          <div className=" p-2 bg-secondry rounded-lg text-white cursor-pointer">
            <ArrowLeft />
          </div>
          <p>اكتشف المزيد</p>
        </div>
      )}
    </div>
  );
}

export default SeeMore;
