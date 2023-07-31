import { Title } from "@/components/core/Title";
import { HouseList } from "@/components/houses/HouseList";
import { NewsList } from "@/components/news_articles/NewsList";

const Page = () => {
  return (
    <div>
      <section tw="flex justify-center items-center flex-col gap-8 pb-8">
        <Title>Pueblar - Come to the Pueblo</Title>
        <NewsList />
      </section>
      <section tw="flex p-4 pt-12 border-t border-gray-300 text-gray-700"></section>
      <section tw="flex justify-center items-center flex-col gap-8">
        <Title>Available Houses</Title>
        <HouseList />
      </section>
    </div>
  );
};

export default Page;
