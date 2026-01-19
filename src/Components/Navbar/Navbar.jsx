import React from "react";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";

const Navbar = () => {
  const Links = (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/career">
        <li>Career</li>
      </Link>
    </>
  );
  return (
    <div className="flex w-11/12 mx-auto justify-between items-center py-4 ">
        <div></div>
      <div className="list-none flex gap-4 text-lg text-[#706f6f] font-normal leading-6  justify-center items-center">
        {Links}
      </div>
      <div className="flex gap-2  items-center justify-center">
        <img src={user} alt="" />
        <button className="bg-[#403F3F] text-[#ffffff] px-6 py-1">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
