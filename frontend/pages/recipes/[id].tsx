import { Title } from "@/components/core/Title";
import { NewsArticleCard } from "@/components/news_articles/NewsArticleCard";
import { backendFetcher } from "@/lib/api/api_main";
import { useRouter } from "next/router";
import useSWR from "swr";

const NewsMorePage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: news } = useSWR(`/news/get/${id}`, {
    refreshInterval: 10000,
  });

  return (
    <section tw="flex flex-col gap-4 justify-center items-center">
      {news && (
        <>
          <Title>{news.title}</Title>
          <div tw="flex justify-center">
            <NewsArticleCard news={news} more />
          </div>
        </>
      )}
    </section>
  );
};

export default NewsMorePage;
