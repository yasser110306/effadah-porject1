import React from "react";
import SeeMore from "../reuse/SeeMore";
import Question from "./Question";

function CommonQs() {
  return (
    <div className=" container mt-60 flex gap-20 items-center ">
      <div className=" flex-1 flex flex-col gap-4">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <SeeMore span1="الأسئلة" span2="الأكثر" span3="شيوعاً" />
    </div>
  );
}

export default CommonQs;
