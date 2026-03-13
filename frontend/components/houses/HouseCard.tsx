import { useMemo } from "react";
import { PuebloHouse_Interface } from "@/types/house";
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
    <div tw="w-full sm:w-80">
      <div tw="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image with overlays */}
        <div tw="h-48" style={{ position: "relative" }}>
          <img tw="h-48 w-full object-cover" src={pic} alt={title} />
          {/* Gradient overlay */}
          <div
            style={{ position: "absolute", inset: 0 }}
            tw="bg-gradient-to-t from-black/50 to-transparent"
          />
          {/* Condition badge */}
          <span
            style={{ position: "absolute", bottom: "0.5rem", left: "0.75rem" }}
            tw="text-xs font-bold uppercase tracking-widest text-white bg-black/30 px-2 py-0.5 rounded-full">
            {condition}
          </span>
          {/* Heart icon */}
          <button
            style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
            tw="bg-white/20 backdrop-blur-sm rounded-full p-1.5 hover:bg-white/40 transition-colors">
            <svg
              tw="h-4 w-4 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
            </svg>
          </button>
        </div>

        {/* Title & location */}
        <div tw="px-4 pt-4 pb-2">
          <p tw="text-lg font-bold text-gray-900 leading-tight">{title}</p>
          <p tw="text-sm text-gray-500 mt-0.5">
            {town}, {province}
          </p>
        </div>

        {/* Comment */}
        <div tw="mx-4 mb-3 px-3 py-2 rounded-lg bg-[#e1e6cf]">
          <p tw="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
            Comment
          </p>
          <p tw="text-sm text-gray-700 italic">{comment}</p>
        </div>

        {/* Footer: area, price, contact */}
        <div tw="flex items-center px-4 py-3 border-t border-gray-100 gap-3">
          {/* Area */}
          <div tw="flex-1 flex items-center gap-1.5 text-gray-600">
            <svg
              tw="h-4 w-4 flex-shrink-0 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14zm9-13h6v6h-2V8h-4V6zm-6 6h2v4h4v2H6v-6z"></path>
            </svg>
            <span tw="text-sm font-semibold text-gray-800">{area}</span>
            <span tw="text-xs text-gray-500">m²</span>
          </div>

          {/* Price */}
          <div tw="flex-1 flex items-center gap-1.5 text-gray-600">
            <svg
              tw="h-4 w-4 flex-shrink-0 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z"></path>
            </svg>
            <span tw="text-sm font-semibold text-gray-800">{price}</span>
            <span tw="text-xs text-gray-500">€</span>
          </div>

          {/* Contact */}
          <a
            href={`mailto:${contact}`}
            tw="flex items-center gap-1.5 text-[#d4a373] hover:text-[#b8895a] transition-colors font-semibold text-sm">
            <svg
              tw="h-4 w-4 flex-shrink-0 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z"></path>
            </svg>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
