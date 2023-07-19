import { Title } from "@/components/core/Title";
import { RecipesList } from "@/components/recipes/RecipesList";

const RecipePage = () => {
  return (
    <section tw="flex justify-center items-center flex-col gap-8">
      <Title>Recipes</Title>
      <p tw="text-center text-lg font-bold">Esta es la pagina de las recetas</p>
      <RecipesList />
    </section>
  );
};

export default RecipePage;
