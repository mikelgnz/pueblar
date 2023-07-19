import { Title } from "@/components/core/Title";
import { IngredientsList } from "@/components/ingredients/IngredientsList";

const IngredientPage = () => {
  return (
    <section tw="flex justify-center items-center flex-col gap-8">
      <Title>Ingredients</Title>
      <p tw="text-center text-lg font-bold">
        Esta es la pagina de los ingredientes
      </p>
      <IngredientsList />
    </section>
  );
};

export default IngredientPage;
