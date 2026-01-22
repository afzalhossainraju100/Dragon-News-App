import React from 'react';
import SwimmingImage from '../../assets/swimming.png';
import Class from '../../assets/class.png';
import playGround from '../../assets/playground.png';
import BgPng from '../../assets/bg.png';
const Qzone = () => {
    return (
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-[#F3F3F3] p-3 space-y-6 ">
          <h2 className="font-bold text-xl text-left ">Q-Zone</h2>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <div>
              <img src={SwimmingImage} alt="Swimming" />
            </div>
            <div>
              <img src={Class} alt="Class" />
            </div>
            <div>
              <img src={playGround} alt="Playground" />
            </div>
          </div>
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <img className="w-full" src={BgPng} alt="Background" />
        </div>
      </div>
    );
};

export default Qzone;