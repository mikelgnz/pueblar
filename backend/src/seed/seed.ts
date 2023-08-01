import mongoose from "mongoose";
import { DB_URI } from "./../config";
import { NewsArticleModel } from "./../models/NewsArticle";
import { createHouses } from "./seed_house";
import { PuebloHouseModel } from "../models/Pueblohouse";

const createNews = async () => {
  const news = await NewsArticleModel.create({
    title:
      "Come live in a town, it reveals twelve towns in Soria in which to settle",
    body: "The pilot project 'Come and live in a town' will publicize the qualities and services of twelve towns in the province of Soria with the aim that the people of the city decide to settle in them.",
    link: "https://www.europapress.es/castilla-y-leon/noticia-vente-vivir-pueblo-da-conocer-doce-localidades-sorianas-instalarse-20230516172254.html",
    pic: "https://img.europapress.es/fotoweb/fotonoticia_20230516172254_640.jpg",
    tags: ["housing"],
    provinces: ["Soria"],
  });
  await NewsArticleModel.create({
    title:
      "The housing shortage in the rural world slows down the arrival of settlers",
    body: "Attracting new settlers is the challenge of the rural world. The province of Guadalajara is one of those that suffers the most from depopulation, however, behind this phenomenon lies a reality that does not favor the arrival of new neighbors: the shortage of housing.",
    link: "https://www.eldiario.es/sociedad/escasez-vivienda-mundo-rural-frena-llegada-pobladores_1_10103931.html",
    pic: "https://static.eldiario.es/clip/78e9dc36-2a26-461b-b735-080c18bc746b_16-9-aspect-ratio_default_0.webp",
    tags: ["depopulation"],
    provinces: ["Guadalajara"],
  });
  await NewsArticleModel.create({
    title: "This is the program that seeks rural entrepreneurship",
    body: "In an effort to transform and revitalize rural Spain, Yoigo and UnLimited Spain have launched the '¡Que vivan los pueblos!' program. This initiative aims to accelerate startup projects focused on promoting entrepreneurship and the rural economy through connectivity.",
    link: "https://cincodias.elpais.com/cincodias/2023/07/03/emprendedores/1688421580_082993.html?rel=buscador_noticias",
    pic: "https://d500.epimg.net/cincodias/imagenes/2023/07/03/emprendedores/1688421580_082993_1688710623_noticia_normal_recorte1.jpg",
    tags: ["startups", "business", "entrepreneurship", "acceleration"],
    provinces: [
      "Asturias",
      "Baleares",
      "Burgos",
      "Cáceres",
      "Granada",
      "Málaga",
      "Tarragona",
      "Zaragoza",
    ],
  });
};

(async () => {
  await mongoose.connect(DB_URI);
  console.log("✅ DB Conectada");
  try {
    await PuebloHouseModel.collection.drop();
    await NewsArticleModel.collection.drop();
  } catch (err) {
    console.log("⛔ Data does not found");
  }

  await createNews();
  await Promise.all(createHouses());


  await mongoose.disconnect();
  console.log("⛔ DB Desconectada");
})();
