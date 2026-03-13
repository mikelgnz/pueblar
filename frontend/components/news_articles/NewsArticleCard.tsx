import { NewsArticle_Interface, NewsMore_Interface } from "@/types/news";
import { useMemo } from "react";
import tw from "twin.macro";
import React from "react";

export const NewsArticleCard: React.FC<{
  news: NewsArticle_Interface | NewsMore_Interface;
  more?: boolean;
}> = ({ news, more }) => {
  const data = useMemo(() => {
    return news;
  }, [news]);

  const { _id, title, body, link, pic, tags, provinces } = data;

  return (
    <div tw="w-full sm:w-80">
      <div tw="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image with heart overlay */}
        <div tw="h-48" style={{ position: "relative" }}>
          <img tw="h-48 w-full object-cover" src={pic} alt={title} />
          <div
            style={{ position: "absolute", inset: 0 }}
            tw="bg-gradient-to-t from-black/30 to-transparent"
          />
          <button
            style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
            tw="bg-white/20 backdrop-blur-sm rounded-full p-1.5 hover:bg-white/40 transition-colors">
            <svg
              tw="h-4 w-4 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
            </svg>
          </button>
        </div>

        {/* Title */}
        <div tw="px-4 pt-4 pb-2">
          <p tw="text-lg font-bold text-gray-900 leading-tight">{title}</p>
        </div>

        {/* Body */}
        <div tw="mx-4 mb-3 px-3 py-2 rounded-lg bg-[#e1e6cf]">
          <p tw="text-sm text-gray-700"
            style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {body}
          </p>
        </div>

        {/* Provinces & Tags footer */}
        <div tw="px-4 py-3 border-t border-gray-100">
          {provinces && provinces.length > 0 && (
            <div tw="mb-2">
              <span tw="text-xs font-semibold uppercase tracking-wide text-gray-500 mr-2">
                Provinces
              </span>
              {provinces.map((province) => (
                <span
                  key={province}
                  tw="inline-block bg-gray-100 rounded-full px-2.5 py-0.5 text-xs font-semibold text-gray-600 mr-1 mb-1">
                  #{province}
                </span>
              ))}
            </div>
          )}
          {tags && tags.length > 0 && (
            <div>
              <span tw="text-xs font-semibold uppercase tracking-wide text-gray-500 mr-2">
                Tags
              </span>
              {tags.map((tag) => (
                <span
                  key={tag}
                  tw="inline-block bg-[#e1e6cf] rounded-full px-2.5 py-0.5 text-xs font-semibold text-gray-600 mr-1 mb-1">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
