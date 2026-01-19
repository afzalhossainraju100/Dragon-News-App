import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import LatestNews from "../Components/LatestNews/LatestNews.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";

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
      <main>
        <section className="left_nav"></section>
        <section className="main">
            <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
