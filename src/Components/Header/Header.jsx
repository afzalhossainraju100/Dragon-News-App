import React from "react";
import logo from "../../assets/logo.png";

import { format } from "date-fns";

const Header = () => {

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center p-6 space-y-2 ">
        <img src={logo} alt="Logo" />
        <p className="text-[#706f6f] text-lg font-normal leading-6">
          Journalism Without Fear or Favour
        </p>
        <p className="text-xl font-medium leading-6 text-[#403F3F]">
          {" "}
          {format(new Date(), "EEEE,")}
          <span className="text-[#706F6F]">
            {" "}
            {format(new Date(), "MMMM dd, yyyy")}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Header;
