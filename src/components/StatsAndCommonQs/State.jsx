import React from "react";

function State({ image, content, stateName }) {
  return (
    <div
      id="state"
      className=" h-80 bg-white rounded-3xl  flex flex-col items-center  "
    >
      <div className=" p-5 flex-1 ">
        <img src={image} alt="img" />
      </div>
      <p className=" text-center w-full flex-1 text-2l text-secondry z-10  font-bold flex flex-col justify-between p-10 ">
        {content}
        <span className=" block font-normal text-lg">{stateName}</span>
      </p>
    </div>
  );
}

export default State;
