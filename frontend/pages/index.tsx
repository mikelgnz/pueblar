import { Title } from "@/components/core/Title";
import { NewsList } from "@/components/news_articles/NewsList";

const Page = () => {
  return (
    <div>
      <section tw="flex justify-center items-center flex-col gap-8">
        <Title>Pueblar - Come to the Pueblo</Title>
        <NewsList />
      </section>
    </div>
  );
};

export default Page;
