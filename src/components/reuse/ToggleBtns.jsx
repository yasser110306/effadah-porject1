import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ToggleBtns() {
  return (
    <div className=" flex mt-7 gap-3 items-center">
      <div className="p-2 border rounded-md border-slate-300 text-slate-300 hover:text-secondry hover:border-primary cursor-pointer transition-all">
        <ChevronLeft />
      </div>
      <div className="p-2 border rounded-md border-slate-300 text-slate-300 hover:text-secondry hover:border-primary cursor-pointer transition-all">
        <ChevronRight />
      </div>
      <span className=" w-40 h-0.5 bg-slate-300"></span>
    </div>
  );
}

export default ToggleBtns;
