import { Title } from "@/components/base/Title";
import { HouseList } from "@/components/houses/HouseList";
import { NewHouseButton } from "@/components/houses/NewHouseButton";
import { NewsList } from "@/components/news_articles/NewsList";

const Page = () => {
  return (
    <div>
      <section tw="flex justify-center items-center flex-col gap-8 pb-8">
        <Title>Pueblar - Come to the Pueblo</Title>
        <p>Your site for information about moving to a "Pueblo" in Spain.</p>
        <NewsList />
      </section>
      <section tw="flex p-4 pt-12 border-t border-gray-300 text-gray-700"></section>
      <section tw="flex justify-center items-center flex-col gap-8">
        <Title>Available Listings</Title>
        <p>Browse the houses looking for a settler.</p>
        <HouseList />
        <NewHouseButton href="/houses/new">Create Listing</NewHouseButton>
      </section>
    </div>
  );
};

export default Page;
