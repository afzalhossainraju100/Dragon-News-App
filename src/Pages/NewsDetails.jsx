import React from "react";
import Header from "../Components/Header/Header.jsx";
import RightAside from "../Components/HomeLayout/RightAside.jsx";
import NewsDetailsCard from "../Components/NewsDetailsCard/NewsDetailsCard.jsx";
import { useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const news = React.useMemo(() => data.find((n) => n.id == id), [data, id]);

  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <h2 className="font-bold ">Dragon News</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
