import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import LatestNews from "../Components/LatestNews/LatestNews.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
import LeftAside from "../Components/HomeLayout/LeftAside.jsx";
import RightAside from "../Components/HomeLayout/RightAside.jsx";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto my-3  md:grid md:grid-cols-12 gap-6 flex flex-col">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
            <Outlet></Outlet>
        </section>
        <aside className="col-span-3"> <RightAside></RightAside>
        </aside>
         
      </main>
    </div>
  );
};

export default HomeLayout;
