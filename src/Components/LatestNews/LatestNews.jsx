import React from "react";

const LatestNews = () => {
  return (
    <div className="flex gap-4 p-4 bg-[#f3f3f3] items-center">
      <button className="bg-[#D72050] px-4 py-2 text-[#ffffff] flex-shrink-0">
        Latest
      </button>
      <div className="flex-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16">
          <p className="text-[#403f3f] text-lg font-semibold leading-8 inline-block">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-[#403f3f] text-lg font-semibold leading-8 inline-block">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
