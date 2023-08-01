import { Title } from "@/components/base/Title";
import { HouseForm } from "@/components/houses/HouseForm";

const NewHousePage = () => {
  return (
    <section tw="flex justify-center items-center flex-col gap-8">
      <Title>Available Pueblo Houses</Title>
      <p tw="text-center text-lg text-slate-400">Create a new Listing</p>
      <HouseForm />
    </section>
  );
};

export default NewHousePage;
