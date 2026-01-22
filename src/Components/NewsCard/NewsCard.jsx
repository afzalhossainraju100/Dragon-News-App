import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const [save, setSave] = React.useState(false);

  const handleBookmark = () => {
    setSave(!save);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <AiFillStar
        key={index}
        className={index < rating ? "text-orange-500" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="border-0 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Author Header */}
      <div className="p-4 flex items-center justify-between bg-[#F3F3F3]">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800 text-sm">
              {news.author.name}
            </h4>
            <p className="text-gray-500 text-xs">
              {formatDate(news.author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleBookmark}
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Bookmark"
          >
            {save ? (
              <BsBookmarkFill className="text-lg" />
            ) : (
              <BsBookmark className="text-lg" />
            )}
          </button>
          <button
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Share"
          >
            <IoShareSocialOutline className="text-lg" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 leading-tight mb-4">
          {news.title}
        </h2>
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            {news.details.length > 200
              ? `${news.details.substring(0, 200)}...`
              : news.details}
          </p>
          {news.details.length > 200 && (
            <Link
              to={`/newsDetails/${news.id}`}
              className="text-orange-500 font-semibold text-sm hover:underline"
            >
              Read More
            </Link>
          )}
        </div>

        {/* Tags */}
        {news.tags && news.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {news.tags.slice(0, 5).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer - Rating and Views */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">{renderStars(news.rating.number)}</div>
            <span className="text-gray-700 font-semibold text-sm">
              {news.rating.number.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <AiOutlineEye className="text-lg" />
            <span className="text-sm font-medium">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
