import React from "react";

function Pros({ image, name }) {
  return (
    <div className=" p-5 border rounded-xl flex flex-col items-center gap-3 w-32 abs">
      <div className=" flex items-end flex-1 ">
        <img src={image} alt="pros" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Pros;
