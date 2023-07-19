import { RecipesCard } from "./RecipeCard";
import { useRecipesList } from "./useRecipesList";

export const RecipesList = () => {
  const list = useRecipesList();

  return (
    <div tw="flex gap-4 flex-wrap w-full">
      {!list && (
       <p>Loading..</p> 
      )}
      {list &&
        list.map((recipe) => {
          return <RecipesCard recipe={recipe} key={recipe._id} />;
        })}
    </div>
  );
}
