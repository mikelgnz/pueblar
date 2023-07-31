import mongoose from "mongoose";
import { DB_URI } from "./../config";
import { NewsArticleModel } from "./../models/NewsArticle";
import { createHouses } from "./seed_house";
import { PuebloHouseModel } from "../models/Pueblohouse";

const createNews = async () => {
  const news = await NewsArticleModel.create({
    title:
      "Vente a vivir a un pueblo da a conocer doce localidades sorianas en las que instalarse",
    body: "El proyecto piloto 'Vente a vivir a un pueblo' dará a conocer las cualidades y los servicios de doce pueblos de la provincia de Soria con el objetivo de que la gente de la ciudad se decida a instalarse en ellos.",
    link: "https://www.europapress.es/castilla-y-leon/noticia-vente-vivir-pueblo-da-conocer-doce-localidades-sorianas-instalarse-20230516172254.html",
    pic: "https://img.europapress.es/fotoweb/fotonoticia_20230516172254_640.jpg",
    tags: ["housing"],
    provinces: ["Soria"],
  });
  await NewsArticleModel.create({
    title:
      "La escasez de vivienda en el mundo rural frena la llegada de pobladores",
    body: "Atraer a nuevos pobladores es el reto del mundo rural. La provincia de Guadalajara es una de las que más sufre la despoblación, sin embargo, tras este fenómeno se esconde una realidad que no favorece la llegada de nuevos vecinos: la escasez de vivienda.",
    link: "https://www.eldiario.es/sociedad/escasez-vivienda-mundo-rural-frena-llegada-pobladores_1_10103931.html",
    pic: "https://static.eldiario.es/clip/78e9dc36-2a26-461b-b735-080c18bc746b_16-9-aspect-ratio_default_0.webp",
    tags: ["depopulation"],
    provinces: ["Guadalajara"],
  });
  await NewsArticleModel.create({
    title: "Así es el programa que busca el emprendimiento rural",
    body: "En un esfuerzo por transformar y revitalizar las zonas rurales de España, Yoigo y UnLimited Spain han puesto en marcha el programa ‘¡Que vivan los pueblos!’. Esta iniciativa tiene como objetivo acelerar proyectos de startups enfocados en impulsar el emprendimiento y la economía rural a través de la conectividad.",
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
