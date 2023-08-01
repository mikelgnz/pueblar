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

  const {
    _id,
    pic,
    title,
    condition,
    comment,
    price,
    area,
    town,
    province,
    contact,
  } = data;
  return (
    <div tw="max-w-6xl mx-auto">
      <div tw="flex items-center justify-center">
        <div tw="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div tw="bg-white shadow-xl rounded-lg overflow-hidden">
          <div tw= "h-56">
              <img tw="h-56 object-cover w-full" src={pic} alt={title} />
              <div tw="flex justify-end">
                <svg
                  tw="h-6 w-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                </svg>
              </div>
            </div>
            <div tw="p-4">
              <p tw="uppercase tracking-wide text-sm font-bold text-gray-700">
                {condition}
              </p>
              <p tw="text-xl text-gray-900">{title}</p>
              <p tw="text-gray-700">
                {town}, {province}
              </p>
            </div>

            <div tw="px-4 pt-3 pb-4 border-t border-gray-300 bg-[#e1e6cf]">
              <div tw="text-xs uppercase font-bold text-gray-600 tracking-wide">
                Comment
              </div>
              <div tw="flex items-center pt-2">
                <p tw="text-sm text-gray-700">{comment}</p>
              </div>
            </div>
            <div tw="flex p-4 border-t border-gray-300 text-gray-700">
              <div tw="flex-1 inline-flex items-center">
                <svg
                  tw="h-6 w-6 text-gray-600 fill-current mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14zm9-13h6v6h-2V8h-4V6zm-6 6h2v4h4v2H6v-6z"></path>
                </svg>
                {area}
                <p tw="text-gray-900 font-bold">m2</p>
              </div>
              <div tw="flex-1 inline-flex items-center">
                <svg
                  tw="h-6 w-6 text-gray-600 fill-current mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z"></path>
                </svg>
                {price}
                <p tw="text-gray-900 font-bold">€</p>
              </div>
              <div tw="flex-1 inline-flex items-center">
                <svg
                  tw="h-6 w-6 text-gray-600 fill-current mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z"></path>
                </svg>
                <p tw="text-gray-900 font-bold"><a
                href="mailto:{contact}">Contact</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
