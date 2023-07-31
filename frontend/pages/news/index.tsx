import { Title } from "@/components/core/Title";
import { NewsList } from "@/components/news_articles/NewsList";

const NewsPage = () => {
  return (
    <section tw="flex justify-center items-center flex-col gap-8">
      <Title>News</Title>
      <p tw="text-center text-lg font-bold">More News</p>
      <NewsList />
    </section>
  );
};

export default NewsPage;
