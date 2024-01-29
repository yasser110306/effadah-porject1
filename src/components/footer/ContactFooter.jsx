import React from "react";
import { Mail, Phone, LocateFixed } from "lucide-react";

function ContactFooter() {
  return (
    <div className=" text-white flex flex-col items-end gap-10 md-max:hidden">
      <div className="flex flex-col items-end gap-2 ">
        <h2 className=" text-right text-xl">تواصل معنا</h2>
        <hr className="custom-hr self-end w-1/2 border-primary border" />
      </div>
      <div className=" flex flex-col gap-5">
        <div className=" flex items-center justify-end gap-3">
          <p>info@efadah.com.sa</p>
          <Mail color="#C89B2C" />
        </div>
        <div className=" flex items-center justify-end gap-3">
          <p>+966114116070</p>
          <Phone color="#C89B2C" />
        </div>
        <div className=" flex items-center justify-end gap-3">
          <p>+966114118118</p>
          <Phone color="#C89B2C" />
        </div>
        <div className=" flex items-center justify-end gap-3 text-right">
          <p>Al Imam Saud Ibn Faysal Road As Sahafah, Riyadh</p>
          <LocateFixed color="#C89B2C" />
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
