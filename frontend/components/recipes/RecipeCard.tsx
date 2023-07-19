import { RecipesDetailsInterface, RecipesInterface } from "@/types/recipe";
import { IngredientCard } from "../ingredients/IngredientCard";
import { useUser } from "@/lib/context/useUser";
import { useMemo } from "react";
import Link from "next/link";
import tw from "twin.macro";

export const RecipesCard: React.FC<{
  recipe: RecipesInterface | RecipesDetailsInterface;
  details?: boolean;
}> = ({ recipe, details }) => {
  const data = useMemo(() => {
    return recipe;
  }, [recipe]);

  const { _id, name, instructions, img, ingredients } = data;

  console.log(data);

  const {
    user: { name: userName },
  } = useUser();

  return (
    <div
      css={[
        tw`bg-gray-200 rounded-xl border border-slate-200 grow shrink basis-[600px]`,
        details && tw`grow-0 basis-[800px]`,
      ]}
    >
      <div tw="overflow-hidden rounded-xl flex flex-col gap-4">
        <img tw="max-h-96 object-cover" src={img} alt="recipe-image" />

        <div>
          <div tw="rounded-full mx-4 px-4 py-2 bg-white text-slate-500 inline-block">
            {userName}
          </div>
        </div>
        <div tw="p-4 flex flex-col gap-2">
          <h2 tw="font-bold text-3xl">{name}</h2>
          {details && <p tw="text-slate-500 text-lg">{instructions}</p>}
        </div>
        {!details && (
          <Link
            tw="rounded-full m-4 px-4 py-2 bg-white text-slate-500"
            href={`/recipes/${_id}`}
          >
            View Details
          </Link>
        )}
        {details && ingredients && ingredients.length !== 0 && (
          <div tw="p-4 flex flex-wrap gap-4">
            {ingredients.map((ingredient) => {
              return (
                <IngredientCard ingredient={ingredient} key={ingredient._id} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
