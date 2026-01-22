import React, { use } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Context/AuthContext";
import { IoIosLogOut } from "react-icons/io";



const Navbar = () => {
  const {user, signOutUser}=use(AuthContext);
  const handleLogout=()=>{
    signOutUser()
    .then(()=>{
      alert("User logged out successfully");
    })
    .catch((error)=>{
      alert(error.message);
    })
  }
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
      <div>{user ? user.email : ""}</div>
      <div className="list-none flex gap-4 text-lg text-[#706f6f] font-normal leading-6  justify-center items-center">
        {Links}
      </div>
      <div className="flex gap-2  items-center justify-center">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogout}
            className="bg-[#403F3F] text-[#ffffff] px-6 py-1 flex items-center gap-2"
          >
            Log out <IoIosLogOut />
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-[#403F3F] text-[#ffffff] px-6 py-1 "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
