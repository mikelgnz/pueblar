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
    <div
      css={[
        tw`bg-white max-w-sm rounded overflow-hidden shadow-lg grow shrink basis-[300px]`,
        more && tw`grow-0 basis-[800px]`,
      ]}>
      <div tw="overflow-hidden rounded-l flex flex-col gap-4">
        <img tw="w-full" src={pic} alt={title} />
        <div tw="p-4 flex flex-col gap-2">
          <h5 tw="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {title}
          </h5>

          <p tw="font-normal text-gray-700 dark:text-black text-justify whitespace-pre-wrap">
            {body}
          </p>
        </div>
        <div tw="flex items-center justify-center gap-x-6 justify-center">
          {!more && (
            <a
              href={`/news/${_id}`}
              tw="rounded-md bg-[#d4a373] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#ccd5ae] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              View More{" "}
            </a>
          )}
          <a
            href={link}
            tw="text-sm font-semibold leading-6 text-[#d4a373] hover:text-[#ccd5ae]">
            Link <span aria-hidden="true">→</span>
          </a>
        </div>
        <div tw="h-px flex-auto bg-gray-100"></div>

        <p tw="ml-5 text-xs text-gray-700 dark:text-black justify-center">
          Provinces:{"  "}
          {provinces.map((province) => (
            <p tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{province}
            </p>
          ))}
        </p>
        <div tw="h-px flex-auto bg-gray-100"></div>
        <p tw="ml-5 text-xs text-gray-700 dark:text-black justify-center">
          Tags:{"  "}
          {tags.map((tag) => (
            <p tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
};
