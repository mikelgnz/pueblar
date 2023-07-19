import { IngredientCard } from "./IngredientCard";
import { useIngredientsList } from "./useIngredientsList";

export const IngredientsList = () => {
  const list = useIngredientsList();

  return (
    <div tw="flex gap-4 flex-wrap">
      {!list && (
        <p>Loading</p>
      )}
      {list &&
        list.map((ingredient) => {
          return <IngredientCard ingredient={ingredient} key={ingredient._id} />;
        })}
    </div>
  );
}
