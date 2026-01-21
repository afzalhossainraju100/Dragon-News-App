import React from "react";
import { use } from "react";
import { NavLink } from "react-router-dom";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Catagories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold text-xl">
        All Catergories({categories.length})
      </h2>
      <div className="grid grid-cols-1 mt-6 space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className="btn text-left bg-[#ffffff] border-0 hover:bg-[#f3f3f3] normal-case text-[#403f3f] font-semibold"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
