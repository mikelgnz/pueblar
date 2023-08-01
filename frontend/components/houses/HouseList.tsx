import { HouseCard } from "./HouseCard";
import { useHouseList } from "./useHouseList";

export const HouseList = () => {
  const list = useHouseList();

  return (
    <div tw="flex gap-4 flex-wrap w-full">
      {!list && (
       <p>Loading...</p> 
      )}
      {list &&
        list.map((house) => {
          return <HouseCard house={house} key={house._id} />;
        })}
    </div>
  );
}
