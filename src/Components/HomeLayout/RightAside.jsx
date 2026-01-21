import React from "react";
import SocialLogin from "./SocialLogin.jsx";
import Qzone from "./Qzone.jsx";

const RightAside = () => {
  return (
    <div className="space-y-6">
      <SocialLogin></SocialLogin>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;
