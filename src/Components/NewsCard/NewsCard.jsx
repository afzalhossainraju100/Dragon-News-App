import React from 'react';

const NewsCard = ({ news }) => {
    console.log(news);
  return (
    <div>
      <div>
        <div>
            <img src={news.author.img} alt={news.title} />
            <div>
            <h4>{news.author.name}</h4>
            <p>{news.author.published_date}</p>
            </div>
        </div>
        <div>
            
        </div>
      </div>
      <h1>{news.title}</h1>
      <img src="" alt="" />
      <p></p>
      <div>
        <div></div>
        <div></div>
      </div>

    </div>
  );
};

export default NewsCard;