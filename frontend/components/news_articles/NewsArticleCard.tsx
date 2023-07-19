import { NewsArticle_Interface, NewsMore_Interface } from "@/types/news";
import { useUser } from "@/lib/context/useUser";
import { useMemo } from "react";
import Link from "next/link";
import tw from "twin.macro";

export const NewsArticleCard: React.FC<{
  news: NewsArticle_Interface |
  NewsMore_Interface;
  more?: boolean;
}> = ({ news, more }) => {
  const data = useMemo(() => {
    return news;
  }, [news]);

  const { _id, title, body, link, pic, tags, provinces } = data;

  const {
    user: { name: userName },
  } = useUser();
  console.log(body)
  return (
    <div
      css={[
        tw`bg-gray-200 rounded-xl border border-slate-200 grow shrink basis-[600px]`,
        more && tw`grow-0 basis-[800px]`,
      ]}
    >
      <div tw="overflow-hidden rounded-xl flex flex-col gap-4">
        <img tw="max-h-96 object-cover" src={pic} alt="news image" />

        <div>
          <div tw="rounded-full mx-4 px-4 py-2 bg-white text-slate-500 inline-block">
            {userName}
          </div>
        </div>
        <div tw="p-4 flex flex-col gap-2">
          <h2 tw="font-bold text-3xl">{title}</h2>
        
          <p tw="text-slate-500 text-lg whitespace-pre-wrap">{body}</p>
        </div>
        {!more && (
          
          <Link
            tw="rounded-full m-4 px-4 py-2 bg-white text-slate-500"
            href={`/news/${_id}`}
          >
            View More
          </Link>
        )}
      </div>
    </div>
  );
};