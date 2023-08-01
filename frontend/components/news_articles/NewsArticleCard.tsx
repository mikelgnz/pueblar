import { NewsArticle_Interface, NewsMore_Interface } from "@/types/news";
import { useMemo } from "react";
import Link from "next/link";
import tw from "twin.macro";

export const NewsArticleCard: React.FC<{
  news: NewsArticle_Interface | NewsMore_Interface;
  more?: boolean;
}> = ({ news, more }) => {
  const data = useMemo(() => {
    return news;
  }, [news]);

  const { _id, title, body, link, pic, tags, provinces } = data;
  return (
    <div tw="max-w-6xl mx-auto">
      <div tw="flex items-center justify-center">
        <div tw="max-w-sm w-full sm:w-full py-6 px-3">
          <div tw="bg-white shadow-xl rounded-lg overflow-hidden">
            <div tw= "h-56">
              <img tw="h-56 object-cover w-full" src={pic} alt={title} />
              <div tw="flex justify-end">
                <svg
                  tw="h-6 w-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                </svg>
              </div>
            </div>
            <div tw="p-4">
              <p tw="text-xl text-gray-900">{title}</p>
            </div>

            <div tw="px-4 pt-3 pb-4 border-t border-gray-300 bg-[#e1e6cf]">
              <div tw="flex items-center pt-2">
                <p tw="text-sm text-gray-700">{body}</p>
              </div>
            </div>
            <div tw="flex p-4 border-t border-gray-300 text-gray-700">
              <div tw="flex-1 inline-flex items-center">
                <p tw="ml-5 text-xs text-gray-700 dark:text-black">
                  Provinces:{"  "}
                  {provinces.map((province) => (
                    <p tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{province}
                    </p>
                  ))}
                </p>
              </div>
            </div>
            <div tw="px-4 pt-3 pb-4 border-t border-gray-300 bg-[#e1e6cf]">
              <div tw="flex-1 inline-flex items-center">
                <p tw="ml-5 text-xs text-gray-700 dark:text-black">
                  Tags:{"  "}
                  {tags.map((tag) => (
                    <p tw="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{tag}
                    </p>
                  ))}
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
