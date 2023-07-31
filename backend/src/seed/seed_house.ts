import mongoose from "mongoose";
import { DB_URI } from "../config";
import { PuebloHouseModel } from "../models/Pueblohouse";

let HouseArray = [
  {
    title: "Come with your family to Corumbela",
    pic: "https://i0.hippopx.com/photos/79/497/235/spain-village-ise-shima-town-preview.jpg",
    price: "free",
    for: "rent",
    m2: "90",
    condition: "some update needed",
    comment:
      "The small town of Corumbela needs families to move in so authorities don’t close the school.",
    contact: "info@house.com",
    province: "málaga",
  },
  {
    title: "Rehabilitated house",
    pic: "https://cdn.thinkwebcontent.com/property/15129/7193992/20221102050256/w1920h1440/s640x480/x-197834291.jpg",
    price: "15000",
    for: "sale",
    m2: "110",
    condition: "ready to live in",
    comment:
      "The small town of Corumbela needs families to move in so authorities don’t close the school.",
    contact: "info@house.com",
    province: "valencia",
  },
  {
    title: "300 year old house",
    pic: "https://cdn.terrenos.es/photo/0004/48/thumb_347164_photo_standart.jpg",
    price: "free",
    for: "sale",
    m2: "210",
    condition: "to rehabilitate",
    comment:
      "The small town of Corumbela needs families to move in so authorities don’t close the school.",
    contact: "info@house.com",
    province: "araba",
  },
];

export const createHouses = () => {
  return HouseArray.map(async (house) => {
    await PuebloHouseModel.create(house);
  });
};




