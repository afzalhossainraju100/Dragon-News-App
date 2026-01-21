import React, { useMemo } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Components/NewsCard/NewsCard";

const CatagoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const filteredNews = useMemo(() => {
    if (id === "0") {
      return data;
    }else if(id == "1"){
      return data.filter((news) => news.others.is_today_pick == true);
    }else{
    const newsList = Array.isArray(data) ? data : [];
    return newsList.filter((news) => news.category_id === parseInt(id));
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">
        Dragon News Home {filteredNews.length}
      </h2>
      <div className="space-y-4 mt-6 grid grid-cols-1 gap-6">
        {filteredNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoryNews;
