import React from "react";
import { Link } from "react-router-dom";

function SignCard({ type, src, bgClr, role }) {
  return (
    <Link to={`/log-in-${role}`}>
      <div className=" flex flex-col gap-7 justify-center items-center p-5 rounded-3xl mb-10 place-self-center cursor-pointer border">
        <div
          className=" flex  items-center p-20 rounded-3xl  "
          style={{ backgroundColor: bgClr }}
        >
          <img draggable={false} src={src} alt="type" />
        </div>
        <p className=" text-black font-semibold text-lg">
          تسجيل الدخول كـ <span>{type}</span>
        </p>
      </div>
    </Link>
  );
}

export default SignCard;
