import { IngredientInterface } from "@/types/ingredient";
import { useMemo } from "react";

export const IngredientCard: React.FC<{ ingredient: IngredientInterface }> = ({
  ingredient,
}) => {
  const data = useMemo(() => {
    return ingredient;
  }, [ingredient]);

  const { name, quantity, img } = data;

  return (
    <div tw="bg-white rounded-xl border border-slate-200 flex flex-col grow shrink basis-[250px] gap-4 overflow-hidden">
      <img tw="max-h-56 object-cover" src={img} alt="recipe-image" />
      <div tw="p-4">
        <h2 tw="font-bold text-3xl mb-4">{name}</h2>
        <p tw="text-slate-500 text-lg">Quantity: {quantity}</p>
      </div>
    </div>
  );
};
