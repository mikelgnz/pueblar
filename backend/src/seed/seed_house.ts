import mongoose from "mongoose";
import { DB_URI } from "../config";
import { PuebloHouseModel } from "../models/Pueblohouse";

let HouseArray = [
  {
    title: "Come with your family to Corumbela",
    pic: "https://i0.hippopx.com/photos/79/497/235/spain-village-ise-shima-town-preview.jpg",
    price: "0",
    for: "rent",
    area: "90",
    condition: "some update needed",
    comment:
      "The small town of Corumbela needs families to move in so authorities don’t close elementary school.",
    contact: "info@house.com",
    town: "Corumbela",
    province: "Málaga",
  },
  {
    title: "Rehabilitated house",
    pic: "https://cdn.thinkwebcontent.com/property/15129/7193992/20221102050256/w1920h1440/s640x480/x-197834291.jpg",
    price: "15000",
    for: "sale",
    area: "110",
    condition: "ready to live in",
    comment:
      "In the interior side of Valencia, the town has rehabilited old houses. Suited for entrepeneurs and remote workers. ",
    contact: "info@here.com",
    town: "Camporobles",
    province: "Valencia",
  },
  {
    title: "300 year old house",
    pic: "https://cdn.terrenos.es/photo/0004/48/thumb_347164_photo_standart.jpg",
    price: "0",
    for: "sale",
    area: "210",
    condition: "to rehabilitate",
    comment:
      "The house needs to be rehabilited, but with the big stonewalls and area has a lot of potencial. In town there are a lot of works in winneries and vineyards.",
    contact: "info@house.com",
    town: "Lapuebla",
    province: "Araba",
  },
];

export const createHouses = () => {
  return HouseArray.map(async (house) => {
    await PuebloHouseModel.create(house);
  });
};
