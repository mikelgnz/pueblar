import mongoose from "mongoose";
import { DB_URI } from "./config";
import { NewsArticleModel } from "./models/newsArticle";

const createNews = async () => {
  const news = await NewsArticleModel.create({
    title:
      "Vente a vivir a un pueblo da a conocer doce localidades sorianas en las que instalarse",
    body: "El proyecto\npiloto\n\nVente a vivir a un pueblo dará a conocer las cualidades y los servicios de doce pueblos de la provincia de Soria con el objetivo de que la gente de la ciudad se decida a instalarse en ellos. Un proyecto piloto que pone en contacto a los ayuntamientos con personas que quieran vivir en los municipios. El presidente de la Diputación de Soria, Benito Serrano, y el periodista promotor del proyecto, Ramón Pradera, han presentado esta iniciativa que en su primera edición se ha ofrecido a 20 pueblos sorianos, de los que doce han aceptado.",
    link: "https://www.europapress.es/castilla-y-leon/noticia-vente-vivir-pueblo-da-conocer-doce-localidades-sorianas-instalarse-20230516172254.html",
    pic: "https://img.europapress.es/fotoweb/fotonoticia_20230516172254_640.jpg",
    tags: ["housing"],
    provinces: ["Soria"],
  });
  await NewsArticleModel.create({
    title:
      "La escasez de vivienda en el mundo rural frena la llegada de pobladores",
    body: "Atraer a nuevos pobladores es el reto del mundo rural. La provincia de Guadalajara es una de las que más sufre la despoblación, sin embargo, tras este fenómeno se esconde una realidad que no favorece la llegada de nuevos vecinos: la escasez de vivienda. La falta de vivienda libre no es una realidad única de las zonas menos pobladas de la provincia y, aunque el contexto de cada zona es diferente, en última instancia, la escasez de casas en las que vivir es un problema. Así lo señala a EFE Pedro Hernández, alcalde de Cobeta, un pequeño pueblo de la comarca del Señorío de Molina, una de las más despobladas de España. “El principal problema es este, no hay otro, porque si no hay vivienda no puede haber trabajo”, afirma este regidor, que asegura que hoy en día cuentan con carreteras, fibra óptica e incluso espacios para coworking en los municipios de la zona, pero no hay viviendas para alquilar ni comprar.“La administración igual que nos ha puesto fibra óptica y ha mejorado carreteras, las siguientes ayudas tienen que ser para que el ayuntamiento pueda comprar una o dos casas viejas y me ayuden con proyecto, arquitecto y me sea fácil construir cinco o seis casa”, propone Hernández. REABRIÓ LA ESCUELA EN 2021 TRAS CUARENTA AÑOS CERRADA.De hecho, Cobeta puede tomarse como ejemplo de lucha contra la despoblación, ya que incluso en 2021 volvió a abrir el colegio tras 40 años cerrado gracias a la llegada de familias jóvenes con niños.Este municipio contaba con un edificio del antiguo cuartel de la Guardia Civil “donde se han podido hacer 8 viviendas”, un proyecto que comenzó el anterior alcalde y ha finalizado él. “Tengo 13 casas alquiladas como Ayuntamiento a precios populares de 150 o 200 euros”, explica el regidor, que señala que esto supone al Consistorio apenas 30.000 euros de alquileres al año “pero lo que reporta es mucho más”. Esta realidad de falta de viviendas no es ajena de la ‘otra Guadalajara’, como denominan a la zona del Corredor del Henares, que ha visto crecer exponencialmente su población en las últimas décadas. LA DIFICULTAD DE LOGRAR UN ALQUILER. Ese es el caso, por ejemplo, de El Casar, un municipio donde no hay problema de vivienda para comprar, eso sí, no a precios económicos ya que el perfil son chalés o casas independientes de una dimensión media o grande y con parcela, pero donde buscar algo en alquiler es harto complicado como pueden dar cuenta profesores, obreros o guardias civiles que recalan en el municipio por trabajo. La alcaldesa del municipio, María José Valle afirma a EFE que la oferta inmobiliaria “son todo casas o chalés, y eso afecta”, y añade que en algunos casos se alquilan esos chalés, pero a “precios desorbitados”. La alcaldesa de El Casar asegura que “aquí no se deja de construir” ya que el suyo es un municipio con servicios, en crecimiento y a un paso de Alcalá de Henares y Guadalajara capital con precios de compra más económicos en iguales características. Por ello, su objetivo es incentivar a estos promotores a que “hagan promociones que también sean tipo alquiler”. CASAS CERRADAS QUE SUS PROPIETARIOS NO QUIEREN VENDER NI ALQUILAR. No lejos de allí, en Mohernado -con unos doscientos vecinos censados-, piso que sale a la venta no dura ni una semana en el mercado. Así lo asegura a EFE su alcalde, Iván González.“No es un problema actual. Viene de hace muchos años, porque el 90% de los propietarios donde hay terrenos no quieren vender ni tampoco venden casas cerradas, mientras que hay mucha demanda de vivienda”, explica este alcalde, que asegura que “fácilmente hay más de 40 casas cerradas y que se vendrán abajo porque no quieren alquilarlas y algunas pueden alquilarlas”. González señala su necesidad de contar con vivienda para intentar retener a los jóvenes que al no encontrar casa se marchan del municipio, “y ya no vuelven”, afirma. Reconoce que “geográficamente, Mohernando está en un lugar privilegiado, a un paso de la capital y ya el Corredor del Henares se va extendiendo y de allí todas las semanas llegan 15 o 20 personas buscando casas en venta o en alquiler aparte de los del municipio”.",
    link: "https://www.eldiario.es/sociedad/escasez-vivienda-mundo-rural-frena-llegada-pobladores_1_10103931.html",
    pic: "https://static.eldiario.es/clip/78e9dc36-2a26-461b-b735-080c18bc746b_16-9-aspect-ratio_default_0.webp",
    tags: ["depopulation"],
    provinces: ["Guadalajara"],
  });
  await NewsArticleModel.create({
    title: "Así es el programa que busca el emprendimiento rural",
    body: "<p>En un esfuerzo por transformar y revitalizar las zonas rurales de España, Yoigo y UnLimited Spain han puesto en marcha el programa ‘¡Que vivan los pueblos!’. Esta iniciativa tiene como objetivo acelerar proyectos de startups enfocados en impulsar el emprendimiento y la economía rural a través de la conectividad. </p> <div> Con el propósito de visibilizar la situación de la España rural y respaldar el ecosistema emprendedor, ‘¡Que vivan los pueblos!’ busca proyectos innovadores que generen un impacto social positivo en las comunidades rurales. El programa, cuyo periodo de inscripción se extenderá hasta el 13 de septiembre, tendrá una duración de cinco meses.<div/> <div>Las startups seleccionadas recibirán un acompañamiento personalizado por parte de Yoigo y UnLimited Spain, que incluirá diagnóstico de necesidades, asesoramiento individual, mentorías, formación, networking, visibilidad y preparación para medir el impacto social de sus proyectos en el entorno rural de España. ‘¡Que vivan los pueblos!’ ofrece una oportunidad única para impulsar el desarrollo sostenible de las zonas rurales de España a través de la innovación y el emprendimiento. Se espera que esta colaboración entre Yoigo y UnLimited Spain genere un impacto significativo en la transformación y supervivencia de las comunidades rurales, brindándoles nuevas oportunidades y conectividad necesaria para su desarrollo.<div/> <div>Además, el programa ofrece una serie de beneficios adicionales para las startups seleccionadas, como ayudarles a realizar un diagnóstico de su situación. En conjunto con un grupo de expertos, se realizará una evaluación exhaustiva de las fortalezas y debilidades de cada proyecto, así como la definición de los objetivos a alcanzar dentro del programa.<div/><div>Cada startup contará con un mentor dedicado, quien proporcionará una visión más amplia de su proyecto y trabajará en conjunto para trazar los pasos a seguir hacia el éxito.<div/><div>Se brindará asesoramiento individualizado y se fomentará la participación activa en el cambio social de la España Rural, permitiendo a los emprendedores aprender a medir y mejorar el impacto positivo que generan en las comunidades.<div/>Asimismo, se ofrecerán formaciones y sesiones de asesoramiento personalizado, diseñadas para ayudar a resolver desafíos concretos y explorar nuevas posibilidades de crecimiento y desarrollo.<div/> <div>En definitiva, el programa busca fomentar un sentido de comunidad para que emprender sea menos solitario y se promueva el intercambio de experiencias y conocimientos.<div/>",
    link: "https://www.europapress.es/castilla-y-leon/noticia-vente-vivir-pueblo-da-conocer-doce-localidades-sorianas-instalarse-20230516172254.html",
    pic: "https://img.europapress.es/fotoweb/fotonoticia_20230516172254_640.jpg",
    tags: ["housing"],
    provinces: ["Soria"],
  });
};

(async () => {
  await mongoose.connect(DB_URI);
  console.log("✅ DB Conectada");

  try {
    await NewsArticleModel.collection.drop();
  } catch (err) {
    console.log("⛔ Data does not found");
  }

  await createNews();

  await mongoose.disconnect();
  console.log("⛔ DB Desconectada");
})();
