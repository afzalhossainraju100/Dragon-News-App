import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsDetailsCard = ({ news }) => {
  if (!news || !news.id) return null;

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "";
    }
  };

  const tagsLine =
    Array.isArray(news.tags) && news.tags.length
      ? `Tag Cloud Tags: ${news.tags.join(", ")}`
      : "";

  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full object-cover p-6"
      />

      <div className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          {news.title}
        </h2>

        {/* Meta line */}
        <p className="mt-4 text-sm text-gray-500">
          {formatDate(news.author?.published_date)}
          {tagsLine && (
            <span className="hidden md:inline">
              {" "}
              {" | "}
              {tagsLine}
            </span>
          )}
        </p>

        {/* Details */}
        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
          {news.details}
        </p>

        {/* Category CTA */}
        <Link
          to={`/category/${news.category_id}`}
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-rose-500 text-white font-semibold hover:bg-rose-600"
        >
          <FaArrowLeft className="text-white" />
          <span>All news in this category</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
