import { useMemo } from "react";
import { PuebloHouse_Interface } from "@/types/house";
import Link from "next/link";
import tw from "twin.macro";
import React from "react";

export const HouseCard: React.FC<{ house: PuebloHouse_Interface }> = ({
  house,
}) => {
  const data = useMemo(() => {
    return house;
  }, [house]);

  const { _id, pic, title, condition, price, area, town, province } = data;
  return (
    <div
      css={[
        tw`bg-white max-w-sm rounded overflow-hidden shadow-lg grow shrink basis-[300px]`,
      ]}>
      <div tw="overflow-hidden rounded-l flex flex-col gap-4">
        <img tw="w-full" src={pic} alt={title} />
        <div tw="p-4 flex flex-col gap-2">
          <h5 tw="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {title}
          </h5>
          <p tw="font-normal text-gray-700 dark:text-black text-justify whitespace-pre-wrap">
            {condition}
          </p>
        </div>
        <div tw="flex items-center justify-center gap-x-6 justify-center">
          <a
            href={_id}
            tw="text-sm font-semibold leading-6 text-[#d4a373] hover:text-[#ccd5ae]">
            Details <span aria-hidden="true">→</span>
          </a>
        </div>
        <div tw="h-px flex-auto bg-gray-100"></div>

        <p tw="ml-5 text-xs text-gray-700 dark:text-black justify-center">
          <p tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {price}
            {area}
            {town},{province}
          </p>
        </p>
      </div>
    </div>
  );
};
