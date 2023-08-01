import { Title } from "@/components/base/Title";
import { HouseList } from "@/components/houses/HouseList";
import { NewHouseButton } from "@/components/houses/NewHouseButton";

const HousePage = () => {
  return (
    <section tw="flex justify-center items-center flex-col gap-8">
      <Title>Pueblo Houses Available</Title>
      <HouseList />
      <NewHouseButton href="/houses/new">Create Listing</NewHouseButton>
    </section>
  );
};

export default HousePage;
