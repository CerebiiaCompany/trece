export type Project = {
  slug: string;
  number: string;
  title: string;
  location: string;
  category: string;
  client?: string;
  year: string;
  tools: string[];
  image: string;
  gallery?: string[];
  before?: string[];
  after?: string[];
  pdf?: string;
  challenge: string;
  solution: string;
};

import p1 from "@/assets/p1-ecohome.jpg";
import p2 from "@/assets/p2-multifamiliar.jpg";


import p5 from "@/assets/p5-vacacional.jpg";
import p8 from "@/assets/p8-torre.jpg";
import p9 from "@/assets/p9-juvenil.jpg";
import santaRitaHero from "@/assets/santa-rita-fachada.png";
import cobre1 from "@/assets/capilla-cobre-1.jpg";
import cobre2 from "@/assets/capilla-cobre-2.jpg";
import cobre3 from "@/assets/capilla-cobre-3.jpg";
import cobre4 from "@/assets/capilla-cobre-4.jpg";
import cobre5 from "@/assets/capilla-cobre-5.jpg";
import cobre6 from "@/assets/capilla-cobre-6.jpg";
import dn2 from "@/assets/divino-nino-2.jpg";
import dn6 from "@/assets/divino-nino-6.jpg";
import dn7 from "@/assets/divino-nino-7.jpg";
import dn8 from "@/assets/divino-nino-8.jpg";
import dn11 from "@/assets/divino-nino-11.jpg";
import dn12 from "@/assets/divino-nino-12.jpg";
import tor1 from "@/assets/torcoroma-1.jpg";
import tor4 from "@/assets/torcoroma-4.jpg";
import tor7 from "@/assets/torcoroma-7-2.jpg";
import tor17 from "@/assets/torcoroma-17.jpg";
import primAntes1 from "@/assets/primavera-antes-1.jpg";
import primAntes2 from "@/assets/primavera-antes-2.jpg";
import primAntes3 from "@/assets/primavera-antes-3.jpg";
import primDespues1 from "@/assets/primavera-despues-1.jpg";
import primDespues2 from "@/assets/primavera-despues-2.jpg";
import primDespues3 from "@/assets/primavera-despues-3.jpg";
import primDespues4 from "@/assets/primavera-despues-4.jpg";
import primDespues5 from "@/assets/primavera-despues-5.jpg";
import prim2_1 from "@/assets/primavera2-1.jpg";
import prim2_2 from "@/assets/primavera2-2.jpg";
import prim2_3 from "@/assets/primavera2-3.jpg";
import slAntes1 from "@/assets/sanluis-antes-1.jpg";
import slAntes2 from "@/assets/sanluis-antes-2.jpg";
import slAntes3 from "@/assets/sanluis-antes-3.jpg";
import slAntes4 from "@/assets/sanluis-antes-4.jpg";
import slDespues1 from "@/assets/sanluis-despues-1.jpg";
import slDespues2 from "@/assets/sanluis-despues-2.jpg";
import slDespues3 from "@/assets/sanluis-despues-3.jpg";
import slDespues4 from "@/assets/sanluis-despues-4.jpg";
import slDespues5 from "@/assets/sanluis-despues-5.jpg";
import slDespues6 from "@/assets/sanluis-despues-6.jpg";
import colsag1 from "@/assets/colsag-1.jpg";
import colsag2 from "@/assets/colsag-2.jpg";
import colsag3 from "@/assets/colsag-3.jpg";
import colsag4 from "@/assets/colsag-4.jpg";
import colsag5 from "@/assets/colsag-5.jpg";
import colsag6 from "@/assets/colsag-6.jpg";
import colsag7 from "@/assets/colsag-7.jpg";

import home_burgers_1 from "@/assets/com-home-burgers-1.jpg";
import home_burgers_2 from "@/assets/com-home-burgers-2.jpg";
import home_burgers_3 from "@/assets/com-home-burgers-3.jpg";
import home_burgers_4 from "@/assets/com-home-burgers-4.jpg";
import home_burgers_5 from "@/assets/com-home-burgers-5.jpg";
import home_burgers_6 from "@/assets/com-home-burgers-6.jpg";
import dc_ingenieria_1 from "@/assets/com-dc-ingenieria-1.jpg";
import dc_ingenieria_2 from "@/assets/com-dc-ingenieria-2.jpg";
import dc_ingenieria_3 from "@/assets/com-dc-ingenieria-3.jpg";
import dc_ingenieria_4 from "@/assets/com-dc-ingenieria-4.jpg";
import dc_ingenieria_5 from "@/assets/com-dc-ingenieria-5.jpg";
import dc_ingenieria_6 from "@/assets/com-dc-ingenieria-6.jpg";
import dc_ingenieria_7 from "@/assets/com-dc-ingenieria-7.jpg";
import dc_ingenieria_8 from "@/assets/com-dc-ingenieria-8.jpg";
import local_ceiba_1 from "@/assets/com-local-ceiba-1.jpg";
import local_ceiba_2 from "@/assets/com-local-ceiba-2.jpg";
import local_ceiba_3 from "@/assets/com-local-ceiba-3.jpg";
import local_ceiba_4 from "@/assets/com-local-ceiba-4.jpg";
import local_ceiba_5 from "@/assets/com-local-ceiba-5.jpg";
import local_ceiba_6 from "@/assets/com-local-ceiba-6.jpg";
import coworking_1 from "@/assets/com-coworking-1.jpg";
import coworking_2 from "@/assets/com-coworking-2.jpg";
import coworking_3 from "@/assets/com-coworking-3.jpg";
import coworking_4 from "@/assets/com-coworking-4.jpg";
import coworking_5 from "@/assets/com-coworking-5.jpg";
import coworking_6 from "@/assets/com-coworking-6.jpg";
import villa_chirama_1 from "@/assets/com-villa-chirama-1.jpg";
import villa_chirama_2 from "@/assets/com-villa-chirama-2.jpg";
import villa_chirama_3 from "@/assets/com-villa-chirama-3.jpg";
import villa_chirama_4 from "@/assets/com-villa-chirama-4.jpg";
import villa_chirama_5 from "@/assets/com-villa-chirama-5.jpg";
import villa_chirama_6 from "@/assets/com-villa-chirama-6.jpg";
import villa_chirama_7 from "@/assets/com-villa-chirama-7.jpg";
import eds_rivera_1 from "@/assets/com-eds-rivera-1.jpg";
import eds_rivera_2 from "@/assets/com-eds-rivera-2.jpg";
import eds_rivera_3 from "@/assets/com-eds-rivera-3.jpg";
import eds_rivera_4 from "@/assets/com-eds-rivera-4.jpg";
import eds_rivera_5 from "@/assets/com-eds-rivera-5.jpg";
import eds_rivera_6 from "@/assets/com-eds-rivera-6.jpg";
import locales_caobos_1 from "@/assets/com-locales-caobos-1.jpg";
import locales_caobos_2 from "@/assets/com-locales-caobos-2.jpg";
import locales_caobos_3 from "@/assets/com-locales-caobos-3.jpg";
import locales_caobos_4 from "@/assets/com-locales-caobos-4.jpg";
import locales_caobos_5 from "@/assets/com-locales-caobos-5.jpg";
import locales_caobos_6 from "@/assets/com-locales-caobos-6.jpg";
import dres_1 from "@/assets/com-dres-1.jpg";
import dres_2 from "@/assets/com-dres-2.jpg";
import dres_3 from "@/assets/com-dres-3.jpg";
import dres_4 from "@/assets/com-dres-4.jpg";
import dres_5 from "@/assets/com-dres-5.jpg";
import dres_6 from "@/assets/com-dres-6.jpg";
import natucampo_1 from "@/assets/com-natucampo-1.jpg";
import natucampo_2 from "@/assets/com-natucampo-2.jpg";
import natucampo_3 from "@/assets/com-natucampo-3.jpg";
import natucampo_4 from "@/assets/com-natucampo-4.jpg";
import americancargo_1 from "@/assets/com-americancargo-1.jpg";
import americancargo_2 from "@/assets/com-americancargo-2.jpg";
import americancargo_3 from "@/assets/com-americancargo-3.jpg";
import americancargo_4 from "@/assets/com-americancargo-4.jpg";
import americancargo_5 from "@/assets/com-americancargo-5.jpg";
import americancargo_6 from "@/assets/com-americancargo-6.jpg";
import zugo_1 from "@/assets/com-zugo-1.jpg";
import zugo_2 from "@/assets/com-zugo-2.jpg";
import zugo_3 from "@/assets/com-zugo-3.jpg";
import zugo_4 from "@/assets/com-zugo-4.jpg";
import parqueadero_caobos_1 from "@/assets/com-parqueadero-caobos-1.jpg";
import parqueadero_caobos_2 from "@/assets/com-parqueadero-caobos-2.jpg";
import parqueadero_caobos_3 from "@/assets/com-parqueadero-caobos-3.jpg";
import parqueadero_caobos_4 from "@/assets/com-parqueadero-caobos-4.jpg";
import parqueadero_caobos_5 from "@/assets/com-parqueadero-caobos-5.jpg";
import parqueadero_caobos_6 from "@/assets/com-parqueadero-caobos-6.jpg";
import parqueadero_caobos_7 from "@/assets/com-parqueadero-caobos-7.jpg";
import parqueadero_caobos_8 from "@/assets/com-parqueadero-caobos-8.jpg";
import otr_alicante_1 from "@/assets/otr-alicante-1.jpg";
import otr_alicante_2 from "@/assets/otr-alicante-2.jpg";
import otr_alicante_3 from "@/assets/otr-alicante-3.jpg";
import otr_alicante_4 from "@/assets/otr-alicante-4.jpg";
import otr_alicante_5 from "@/assets/otr-alicante-5.jpg";
import otr_alicante_6 from "@/assets/otr-alicante-6.jpg";
import otr_peaje_acacios_1 from "@/assets/otr-peaje-acacios-1.jpg";
import otr_peaje_acacios_2 from "@/assets/otr-peaje-acacios-2.jpg";
import otr_peaje_acacios_3 from "@/assets/otr-peaje-acacios-3.jpg";
import otr_peaje_acacios_4 from "@/assets/otr-peaje-acacios-4.jpg";
import otr_aula_mompox_1 from "@/assets/otr-aula-mompox-1.jpg";
import otr_aula_mompox_2 from "@/assets/otr-aula-mompox-2.jpg";
import otr_aula_mompox_3 from "@/assets/otr-aula-mompox-3.jpg";
import otr_aula_mompox_4 from "@/assets/otr-aula-mompox-4.jpg";
import otr_acceso_reserva_1 from "@/assets/otr-acceso-reserva-1.jpg";
import otr_acceso_reserva_2 from "@/assets/otr-acceso-reserva-2.jpg";
import otr_acceso_reserva_3 from "@/assets/otr-acceso-reserva-3.jpg";
import otr_acceso_reserva_4 from "@/assets/otr-acceso-reserva-4.jpg";
import otr_terraza_comfanorte_1 from "@/assets/otr-terraza-comfanorte-1.jpg";
import otr_terraza_comfanorte_2 from "@/assets/otr-terraza-comfanorte-2.jpg";
import otr_terraza_comfanorte_3 from "@/assets/otr-terraza-comfanorte-3.jpg";
import otr_terraza_comfanorte_4 from "@/assets/otr-terraza-comfanorte-4.jpg";
import otr_terraza_comfanorte_5 from "@/assets/otr-terraza-comfanorte-5.jpg";
import otr_terraza_comfanorte_6 from "@/assets/otr-terraza-comfanorte-6.jpg";
import otr_cocina_social_1 from "@/assets/otr-cocina-social-1.jpg";
import otr_cocina_social_2 from "@/assets/otr-cocina-social-2.jpg";
import otr_cocina_social_3 from "@/assets/otr-cocina-social-3.jpg";
import otr_cocina_social_4 from "@/assets/otr-cocina-social-4.jpg";
import otr_cocina_social_5 from "@/assets/otr-cocina-social-5.jpg";
import otr_cocina_social_6 from "@/assets/otr-cocina-social-6.jpg";
import otr_bodega_barbosa_1 from "@/assets/otr-bodega-barbosa-1.jpg";
import otr_bodega_barbosa_2 from "@/assets/otr-bodega-barbosa-2.jpg";
import otr_bodega_barbosa_3 from "@/assets/otr-bodega-barbosa-3.jpg";
import otr_bodega_barbosa_4 from "@/assets/otr-bodega-barbosa-4.jpg";

const santaRitaPdf = "/santa-rita-de-casia.pdf";

export const projects: Project[] = [
  {
    slug: "ecohome",
    number: "01",
    title: "ECOHOME — Vivienda Unifamiliar",
    location: "La Recta Corozal, Norte de Santander",
    category: "Vivienda Unifamiliar",
    year: "2023",
    tools: ["AutoCAD", "SketchUp", "Lumion", "Photoshop"],
    image: p1,
    challenge:
      "Diseñar una vivienda contemporánea que dialogue con el entorno tropical del Norte de Santander, integrando ventilación cruzada natural, sombras profundas y una envolvente en madera que module la luz sin sacrificar la privacidad del habitante.",
    solution:
      "Se propuso un volumen horizontal elevado sobre un basamento en concreto, con envolvente en listones de madera calada, ventanales corredizos de gran formato y patios interiores vegetales que garantizan confort térmico pasivo durante todo el año.",
  },
  {
    slug: "multifamiliar-chapinero",
    number: "02",
    title: "Vivienda Multifamiliar con Locales Comerciales",
    location: "Chapinero, Cúcuta",
    category: "Uso Mixto",
    year: "2024",
    tools: ["Revit", "AutoCAD", "V-Ray", "Photoshop"],
    image: p2,
    challenge:
      "Resolver en un lote urbano de esquina un programa mixto que activara la primera planta con comercio y ofreciera viviendas eficientes en pisos superiores, respetando la escala del barrio Chapinero.",
    solution:
      "Fachada modular con retranqueos rítmicos, primer nivel doble altura para locales comerciales y núcleo vertical centralizado que permite plantas libres y iluminación cruzada en cada apartamento.",
  },
  {
    slug: "iglesia-santa-rita",
    number: "03",
    title: "Iglesia Santa Rita de Casia",
    location: "Los Patios",
    category: "Arquitectura Religiosa",
    year: "2022",
    tools: ["SketchUp", "V-Ray", "Photoshop"],
    image: santaRitaHero,
    pdf: santaRitaPdf,
    challenge:
      "Traducir un lenguaje litúrgico tradicional a una expresión contemporánea, generando un espacio de recogimiento con luz cenital controlada y una presencia urbana serena.",
    solution:
      "Volumen blanco de sección basilical simplificada, cruz esculpida en bajorrelieve y vitrales verticales que dibujan la luz sobre el altar a lo largo del día.",
  },
  {
    slug: "centro-vacacional-comfaoriente",
    number: "05",
    title: "Centro Vacacional Comfaoriente",
    location: "Chinácota",
    category: "Turismo y Recreación",
    year: "2024",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: p5,
    challenge:
      "Insertar un centro vacacional en un valle de topografía marcada respetando la vegetación existente y las visuales hacia la montaña.",
    solution:
      "Cabañas horizontales dispuestas siguiendo curvas de nivel, cubiertas ligeras a dos aguas y una piscina como pieza articuladora del conjunto.",
  },
  {
    slug: "coworking-comfanorte",
    number: "06",
    title: "Coworking COMFANORTE",
    location: "Cúcuta",
    category: "Espacios Corporativos",
    year: "2024",
    tools: ["Revit", "V-Ray", "Twinmotion"],
    image: coworking_1,
    gallery: [coworking_1, coworking_2, coworking_3, coworking_4, coworking_5, coworking_6],
    challenge:
      "Diseñar un coworking flexible para múltiples formatos de trabajo, con identidad propia y un lenguaje industrial cálido.",
    solution:
      "Cielos abiertos con instalaciones vistas, pisos en madera, mobiliario negro mate y vegetación colgante que humaniza el espacio.",
  },
  {
    slug: "optica-zugo",
    number: "07",
    title: "Óptica ZUGO",
    location: "Cúcuta",
    category: "Local Comercial",
    year: "2023",
    tools: ["SketchUp", "V-Ray", "Photoshop"],
    image: zugo_1,
    gallery: [zugo_1, zugo_2, zugo_3, zugo_4],
    challenge:
      "Crear una experiencia de retail sofisticada que exhibiera los productos como piezas de diseño y prolongara la permanencia del cliente.",
    solution:
      "Estanterías retroiluminadas en madera de nogal, paneles de listones verticales y una isla central de latón que ancla la composición.",
  },
  {
    slug: "torre-miradores-uis",
    number: "08",
    title: "Torre Miradores UIS",
    location: "Bucaramanga",
    category: "Vivienda en Altura",
    year: "2024",
    tools: ["Revit", "Lumion", "V-Ray"],
    image: p8,
    challenge:
      "Optimizar un lote reducido en Bucaramanga para obtener el máximo aprovechamiento de vistas hacia la meseta y una envolvente eficiente frente al asoleamiento.",
    solution:
      "Torre esbelta con balcones alternados que quiebran la fachada, celosías metálicas al poniente y un núcleo estructural que libera plantas.",
  },
  {
    slug: "centro-desarrollo-juvenil",
    number: "09",
    title: "Centro de Desarrollo Juvenil",
    location: "Cali",
    category: "Equipamiento Cultural",
    client: "JASA Ltda.",
    year: "2024",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: p9,
    challenge:
      "Proyectar un equipamiento público capaz de convocar a la juventud del sector con una imagen contemporánea y un programa cultural exigente.",
    solution:
      "Fachada de planos geométricos superpuestos que dialoga con la energía del barrio, plaza pública en el acceso y un gran vestíbulo iluminado cenitalmente.",
  },
  {
    slug: "capilla-nuestra-senora-del-cobre",
    number: "10",
    title: "Capilla Nuestra Señora de la Caridad del Cobre",
    location: "Cúcuta, Norte de Santander",
    category: "Arquitectura Religiosa",
    year: "2024",
    tools: ["Revit", "SketchUp", "V-Ray", "Photoshop"],
    image: cobre4,
    gallery: [cobre4, cobre1, cobre2, cobre5, cobre3, cobre6],
    challenge:
      "Resolver una capilla de escala barrial en un lote urbano estrecho, capaz de albergar la asamblea con dignidad litúrgica, buena acústica y ventilación natural, y a la vez ofrecer una imagen reconocible desde la calle.",
    solution:
      "Una nave única de cubierta inclinada con vitrales ojivales contemporáneos en marco metálico negro, torre-campanario en ladrillo con cruz dorada embebida, presbiterio en madera y mármol, e iluminación lineal integrada que acompaña la geometría del cielo raso.",
  },
  {
    slug: "capilla-divino-nino-la-campina",
    number: "11",
    title: "Capilla Divino Niño La Campiña",
    location: "La Campiña, Cúcuta",
    category: "Arquitectura Religiosa",
    year: "2024",
    tools: ["Revit", "SketchUp", "V-Ray", "Photoshop"],
    image: dn2,
    gallery: [dn2, dn12, dn6, dn8, dn7, dn11],
    challenge:
      "Proyectar una capilla y su despacho parroquial en un lote alargado con fuerte pendiente, resolviendo accesibilidad, ventilación e iluminación natural sin renunciar a una imagen urbana sobria y reconocible en el barrio.",
    solution:
      "Muros en ladrillo a la vista combinados con paños blancos escalonados que filtran la luz por rendijas verticales, torre-campanario en ladrillo gris con cruz embebida, acceso escalonado con jardineras y un interior de nave única en mármol claro y madera con presbiterio elevado.",
  },
  {
    slug: "casa-cural-torcoroma",
    number: "12",
    title: "Casa Cural Nuestra Señora de Torcoroma",
    location: "Cúcuta, Norte de Santander",
    category: "Arquitectura Religiosa",
    year: "2024",
    tools: ["Revit", "SketchUp", "V-Ray", "Photoshop"],
    image: tor1,
    gallery: [tor1, tor4, tor7, tor17],
    challenge:
      "Resolver en un lote alargado la casa cural y el despacho parroquial, integrando atención al público, áreas administrativas y la vivienda del sacerdote con privacidad, ventilación cruzada e iluminación natural en todo el recorrido.",
    solution:
      "Una planta organizada en torno a un patio central longitudinal con pérgola metálica y jardineras, que separa el área pública del despacho de la zona íntima de habitaciones; fachada urbana en ladrillo gris, celosías de madera y voladizo continuo que protege el acceso.",
  },
  {
    slug: "remodelacion-la-primavera",
    number: "13",
    title: "Remodelación Casa La Primavera",
    location: "La Primavera, Cúcuta",
    category: "Remodelación Integral",
    year: "2025",
    tools: ["AutoCAD", "SketchUp", "Dirección de obra"],
    image: primDespues1,
    before: [primAntes1, primAntes2, primAntes3],
    after: [primDespues1, primDespues2, primDespues3, primDespues4, primDespues5],
    challenge:
      "Actualizar una vivienda existente con espacios compartimentados, humedades, cubiertas deterioradas y una fachada sin identidad, sin alterar la estructura original ni exceder el presupuesto familiar.",
    solution:
      "Se liberó la planta social para integrar sala, comedor y cocina; se construyó una cocina en isla con mesón en mármol, carpintería en madera y blanco alto brillo; se renovaron pisos, iluminación y patio interior con jardinera y celosía; y se rediseñó la fachada con volúmenes limpios, enchape en piedra e iluminación arquitectónica.",
  },
  {
    slug: "remodelacion-la-primavera-02",
    number: "14",
    title: "Remodelación La Primavera 02",
    location: "La Primavera, Cúcuta",
    category: "Remodelación Integral",
    year: "2026",
    tools: ["AutoCAD", "SketchUp", "Dirección de obra"],
    image: prim2_1,
    after: [prim2_1, prim2_2, prim2_3],
    challenge:
      "Renovar los espacios sociales de un apartamento existente —recibidor, cocina y comedor— aportando calidez y orden visual sin intervenir la estructura ni los pisos originales en piedra.",
    solution:
      "Se diseñó un recibidor con consola flotante en madera maciza, espejo curvo y celosía vertical iluminada con luz puntual; y se abrió la cocina hacia el comedor con un marco en listones de madera, barra en granito e iluminación lineal y colgante que unifica el conjunto.",
  },
  {
    slug: "apto-san-luis",
    number: "15",
    title: "Apto San Luis",
    location: "San Luis, Cúcuta",
    category: "Remodelación Integral",
    year: "2026",
    tools: ["AutoCAD", "SketchUp", "Dirección de obra"],
    image: slDespues1,
    before: [slAntes1, slAntes2, slAntes3, slAntes4],
    after: [
      slDespues1,
      slDespues2,
      slDespues3,
      slDespues4,
      slDespues5,
      slDespues6,
    ],
    challenge:
      "Renovar por completo un apartamento con espacios compartimentados, acabados desgastados y una cocina cerrada con enchapes deteriorados, humedades y una zona de ropas sin resolver, manteniendo la estructura existente.",
    solution:
      "Se abrió la cocina hacia la zona social con una barra en madera y mueble en gris mate, se renovaron pisos en porcelanato tipo mármol, se rehízo la zona de ropas con lavadero en granito y enchape de gran formato, y se dotaron las habitaciones de clósets en madera con iluminación y carpintería nuevas.",
  },
  {
    slug: "apto-colsag",
    number: "16",
    title: "Apto Colsag",
    location: "Colsag, Cúcuta",
    category: "Remodelación Integral",
    year: "2026",
    tools: ["AutoCAD", "SketchUp", "Dirección de obra"],
    image: colsag1,
    after: [
      colsag1,
      colsag2,
      colsag3,
      colsag4,
      colsag5,
      colsag6,
      colsag7,
    ],
    challenge:
      "Reorganizar un apartamento familiar con zonas sociales fragmentadas y una cocina cerrada, logrando continuidad visual entre sala, comedor y cocina sin modificar la estructura ni los pisos en granito existentes.",
    solution:
      "Se abrió la cocina hacia la zona social con una barra en mármol y celosías verticales en madera que filtran la vista sin cerrar; se diseñaron un recibidor con banca flotante, espejo e iluminación lineal, y mobiliario a medida en madera clara y blanco mate que unifica todos los ambientes.",
  },
  {
    slug: "home-burgers",
    number: "17",
    title: "Concurso Home Burgers & Shakes",
    location: "Cúcuta, Norte de Santander",
    category: "Restaurante / Retail",
    year: "2025",
    tools: ["SketchUp", "V-Ray", "AutoCAD", "Photoshop"],
    image: home_burgers_1,
    gallery: [home_burgers_1, home_burgers_2, home_burgers_3, home_burgers_4, home_burgers_5, home_burgers_6],
    challenge:
      "Proponer, en el marco de un concurso, la imagen de un local de hamburguesas dentro de una plaza comercial: debía resolver alto flujo de clientes, pedidos para llevar y consumo en sitio, y a la vez destacar frente a los locales vecinos con una identidad memorable.",
    solution:
      "Un portal en listones de madera con logotipo retroiluminado ancla la fachada; adentro, arcos, enchape hexagonal, barras altas en madera y vegetación colgante ordenan el recorrido desde el mostrador de pedidos hasta las zonas de permanencia, con iluminación cálida que refuerza la marca.",
  },
  {
    slug: "dc-ingenieria",
    number: "18",
    title: "DC Ingeniería — Sede Corporativa",
    location: "Cúcuta, Norte de Santander",
    category: "Oficinas y Bodegas",
    year: "2025",
    tools: ["Revit", "SketchUp", "V-Ray", "AutoCAD"],
    image: dc_ingenieria_1,
    gallery: [dc_ingenieria_1, dc_ingenieria_2, dc_ingenieria_3, dc_ingenieria_4, dc_ingenieria_5, dc_ingenieria_6, dc_ingenieria_7, dc_ingenieria_8],
    challenge:
      "Unificar en un mismo predio bodegas operativas, patio de maniobras y áreas administrativas para una empresa de ingeniería, con una fachada corporativa sobria que ordenara accesos peatonales y vehiculares.",
    solution:
      "Un frente continuo en tonos grises con portones enrollables, acceso central enmarcado y logotipo sobre antepecho limpio; al interior, oficinas iluminadas naturalmente y circulaciones claras que separan el flujo de visitantes del flujo de carga.",
  },
  {
    slug: "local-ceiba",
    number: "19",
    title: "Local Comercial La Ceiba",
    location: "Cúcuta, Norte de Santander",
    category: "Bar / Restaurante",
    year: "2025",
    tools: ["SketchUp", "V-Ray", "Photoshop"],
    image: local_ceiba_1,
    gallery: [local_ceiba_1, local_ceiba_2, local_ceiba_3, local_ceiba_4, local_ceiba_5, local_ceiba_6],
    challenge:
      "Convertir un local de esquina en un bar-restaurante con presencia urbana nocturna, capaz de abrirse a la calle sin perder control climático ni seguridad.",
    solution:
      "Fachada en carpintería metálica negra con arcos, malla expandida y jardineras perimetrales; marquesina con iluminación lineal para la marca, y un interior de barra central, mesas altas y vegetación que prolonga la experiencia hacia el andén.",
  },
  {
    slug: "villa-chirama",
    number: "20",
    title: "Villa Chirama — Zona Social",
    location: "Norte de Santander",
    category: "Turismo y Eventos",
    year: "2025",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: villa_chirama_1,
    gallery: [villa_chirama_1, villa_chirama_2, villa_chirama_3, villa_chirama_4, villa_chirama_5, villa_chirama_6, villa_chirama_7],
    challenge:
      "Dotar a un club campestre de una zona social cubierta para eventos y restaurante, resistente al clima cálido y con visuales abiertas hacia la montaña.",
    solution:
      "Cubiertas curvas ligeras sobre columnas metálicas esbeltas que generan sombra continua sin cerrar el paisaje; pisos en gres, jardineras florales y mobiliario flexible que permite operar el mismo espacio como restaurante, terraza o salón de eventos.",
  },
  {
    slug: "banos-eds-rivera",
    number: "21",
    title: "Baños EDS Rivera de las Américas",
    location: "Cúcuta, Norte de Santander",
    category: "Estación de Servicio",
    year: "2025",
    tools: ["SketchUp", "V-Ray", "AutoCAD"],
    image: eds_rivera_1,
    gallery: [eds_rivera_1, eds_rivera_2, eds_rivera_3, eds_rivera_4, eds_rivera_5, eds_rivera_6],
    challenge:
      "Renovar el módulo de baños públicos de una estación de servicio: espacio de alto tránsito que exige mantenimiento fácil, ventilación permanente y una imagen que transmita limpieza y seguridad.",
    solution:
      "Volumen compacto en lámina metálica y ladrillo con un mural urbano de gran formato que lo convierte en hito visual; interiores con enchapes de gran formato, mesones flotantes, señalética integrada e iluminación LED que facilita el aseo y reduce puntos de contacto.",
  },
  {
    slug: "locales-caobos",
    number: "22",
    title: "Locales Comerciales Caobos",
    location: "Caobos, Cúcuta",
    category: "Retail / Uso Mixto",
    year: "2025",
    tools: ["Revit", "V-Ray", "AutoCAD"],
    image: locales_caobos_1,
    gallery: [locales_caobos_1, locales_caobos_2, locales_caobos_3, locales_caobos_4, locales_caobos_5, locales_caobos_6],
    challenge:
      "Insertar una batería de locales comerciales en un barrio residencial consolidado, respetando el arbolado existente y ofreciendo fachadas arrendables con identidad unitaria.",
    solution:
      "Un pórtico oscuro con celosías verticales y avisos integrados unifica los tres locales; grandes vitrinas, terrazas con mobiliario y jardineras lineales activan el andén y protegen el árbol existente como parte del proyecto.",
  },
  {
    slug: "dres",
    number: "23",
    title: "D'RES — Carnicería Gourmet",
    location: "Cúcuta, Norte de Santander",
    category: "Local Comercial",
    year: "2025",
    tools: ["SketchUp", "V-Ray", "Photoshop"],
    image: dres_1,
    gallery: [dres_1, dres_2, dres_3, dres_4, dres_5, dres_6],
    challenge:
      "Diseñar una carnicería gourmet donde convivan la exhibición de producto fresco, la góndola de abarrotes importados y la cadena de frío, con un recorrido de compra corto y ordenado.",
    solution:
      "Paneles de madera ranurada con señalética retroiluminada por categoría, góndolas metálicas negras móviles, vitrina refrigerada de acero y neveras verticales en el perímetro; pisos claros e iluminación en riel que resalta el color del producto.",
  },
  {
    slug: "natucampo",
    number: "24",
    title: "NatuCampo — Punto de Comida Rápida",
    location: "Cúcuta, Norte de Santander",
    category: "Restaurante / Retail",
    year: "2025",
    tools: ["SketchUp", "V-Ray", "Photoshop"],
    image: natucampo_1,
    gallery: [natucampo_1, natucampo_2, natucampo_3, natucampo_4],
    challenge:
      "Aprovechar un local estrecho y alargado para operar un punto de comida rápida con línea de producción a la vista, fila ordenada y zona de consumo, sin sensación de encierro.",
    solution:
      "Barra de producción continua sobre un costado, barra alta contra el muro opuesto con murales gráficos de marca, jardín vertical en el acceso y luminarias decorativas; la circulación central con divisores metálicos ordena la fila y agiliza la entrega.",
  },
  {
    slug: "americancargo",
    number: "25",
    title: "Americancargo Diesel",
    location: "Cúcuta, Norte de Santander",
    category: "Showroom y Autopartes",
    year: "2025",
    tools: ["Revit", "V-Ray", "AutoCAD"],
    image: americancargo_1,
    gallery: [americancargo_1, americancargo_2, americancargo_3, americancargo_4, americancargo_5, americancargo_6],
    challenge:
      "Dar imagen corporativa a un almacén de autopartes para vehículos diésel, resolviendo atención al cliente, exhibición de marcas aliadas y bodega en un mismo frente sobre vía de alto tráfico.",
    solution:
      "Una fachada-telón en lámina perforada oscura con aviso retroiluminado y franja de marcas, marquesina que protege el acceso y vitrina continua hacia las oficinas; el interior separa mostrador, exhibición y almacenamiento con iluminación técnica uniforme.",
  },
  {
    slug: "parqueadero-caobos",
    number: "26",
    title: "Parqueadero y Locales Caobos",
    location: "Caobos, Cúcuta",
    category: "Infraestructura Comercial",
    year: "2025",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: parqueadero_caobos_1,
    gallery: [parqueadero_caobos_1, parqueadero_caobos_2, parqueadero_caobos_3, parqueadero_caobos_4, parqueadero_caobos_5, parqueadero_caobos_6, parqueadero_caobos_7, parqueadero_caobos_8],
    challenge:
      "Resolver la demanda de estacionamiento de un conjunto comercial garantizando sombra, drenaje y circulación segura entre vehículos y peatones dentro de un predio irregular.",
    solution:
      "Cubiertas metálicas inclinadas sobre estructura tubular que cubren las bahías, demarcación amarilla y topellantas en cada cajón, franjas peatonales diferenciadas en pavimento y un eje central que conecta directamente con el acceso a los locales.",
  },
  {
    slug: "rincon-de-alicante",
    number: "27",
    title: "Parque Rincón de Alicante",
    location: "Cúcuta, Norte de Santander",
    category: "Espacio Público",
    year: "2024",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: otr_alicante_1,
    gallery: [otr_alicante_1, otr_alicante_2, otr_alicante_3, otr_alicante_4, otr_alicante_5, otr_alicante_6],
    challenge:
      "Recuperar un espacio residual del barrio y convertirlo en un parque seguro que reúna deporte, juego infantil y estancia para todas las edades.",
    solution:
      "Cancha multiuso cubierta con estructura metálica arqueada, zona de juegos, mobiliario urbano en concreto, jardineras lineales y pisos en adoquín que ordenan los recorridos peatonales.",
  },
  {
    slug: "peaje-los-acacios",
    number: "28",
    title: "Peaje Los Acacios",
    location: "Norte de Santander",
    category: "Infraestructura Vial",
    year: "2025",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: otr_peaje_acacios_3,
    gallery: [otr_peaje_acacios_1, otr_peaje_acacios_2, otr_peaje_acacios_3, otr_peaje_acacios_4],
    challenge:
      "Modernizar una estación de peaje garantizando flujo vehicular continuo, visibilidad de la señalización y seguridad para los operarios en un entorno de alta velocidad.",
    solution:
      "Marquesina metálica continua sobre columnas oscuras con semáforos de carril, casetas en concreto con vidrio de piso a techo, isletas señalizadas en amarillo con topellantas y jardineras integradas que suavizan el conjunto.",
  },
  {
    slug: "aula-modular-mompox",
    number: "29",
    title: "Aula Modular Mompox",
    location: "Mompox, Bolívar",
    category: "Equipamiento Educativo",
    year: "2025",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: otr_aula_mompox_1,
    gallery: [otr_aula_mompox_1, otr_aula_mompox_2, otr_aula_mompox_3, otr_aula_mompox_4],
    challenge:
      "Proveer un aula replicable y de montaje rápido en una zona cálida y de riesgo de inundación, con bajo mantenimiento y ventilación natural.",
    solution:
      "Módulo prefabricado elevado sobre pilotes de concreto, estructura metálica negra, cubierta plana con alero perimetral que protege del sol y la lluvia, terraza en gres y ventanería corrida para ventilación cruzada.",
  },
  {
    slug: "acceso-la-reserva",
    number: "30",
    title: "Acceso Conjunto La Reserva",
    location: "Cúcuta, Norte de Santander",
    category: "Portería y Acceso",
    year: "2024",
    tools: ["SketchUp", "Lumion", "AutoCAD"],
    image: otr_acceso_reserva_1,
    gallery: [otr_acceso_reserva_1, otr_acceso_reserva_2, otr_acceso_reserva_3, otr_acceso_reserva_4],
    challenge:
      "Dotar al conjunto de una entrada con identidad y control efectivo, separando el ingreso de residentes y visitantes sin obstruir la vía.",
    solution:
      "Placa horizontal en voladizo con iluminación LED lineal y letras corpóreas, portería vidriada, celosías metálicas verticales en los portones y muro en piedra que acompaña el recorrido.",
  },
  {
    slug: "terraza-comfanorte",
    number: "31",
    title: "Terraza Social COMFANORTE",
    location: "Cúcuta, Norte de Santander",
    category: "Espacio Social",
    client: "COMFANORTE",
    year: "2024",
    tools: ["Revit", "Lumion", "V-Ray"],
    image: otr_terraza_comfanorte_1,
    gallery: [otr_terraza_comfanorte_1, otr_terraza_comfanorte_2, otr_terraza_comfanorte_3, otr_terraza_comfanorte_4, otr_terraza_comfanorte_5, otr_terraza_comfanorte_6],
    challenge:
      "Aprovechar una cubierta existente para crear un espacio social al aire libre que funcione de día y de noche sin sobrecargar la estructura.",
    solution:
      "Zonificación en estancias de mobiliario ligero, jardineras móviles, barandas en vidrio que preservan las visuales, guirnaldas de iluminación cálida y porcelanato claro de baja absorción térmica.",
  },
  {
    slug: "cocina-social-bucaramanga",
    number: "32",
    title: "Cocina Social Bucaramanga",
    location: "Bucaramanga, Santander",
    category: "Cocina Institucional",
    year: "2024",
    tools: ["Revit", "V-Ray", "AutoCAD"],
    image: otr_cocina_social_1,
    gallery: [otr_cocina_social_1, otr_cocina_social_2, otr_cocina_social_3, otr_cocina_social_4, otr_cocina_social_5, otr_cocina_social_6],
    challenge:
      "Organizar una cocina de servicio en una planta alargada y estrecha cumpliendo el flujo higiénico de recepción, preparación, cocción y lavado.",
    solution:
      "Línea caliente con campana extractora industrial en un costado y línea fría de lavado y preparación en el opuesto, mesones y estanterías en acero inoxidable, enchape cerámico de fácil limpieza e iluminación uniforme.",
  },
  {
    slug: "bodega-barbosa",
    number: "33",
    title: "Bodega y Oficinas INGDECOL",
    location: "Barbosa, Santander",
    category: "Industrial y Corporativo",
    client: "INGDECOL S.A.S.",
    year: "2025",
    tools: ["Revit", "Lumion", "AutoCAD"],
    image: otr_bodega_barbosa_1,
    gallery: [otr_bodega_barbosa_1, otr_bodega_barbosa_2, otr_bodega_barbosa_3, otr_bodega_barbosa_4],
    challenge:
      "Integrar bodega operativa y oficinas administrativas en un mismo volumen sobre un lote en pendiente, con imagen corporativa reconocible desde la vía.",
    solution:
      "Base maciza en ladrillo gris para el área de bodega y dos niveles superiores de oficinas con ventanales, marcos curvos y placas voladas; acceso jerarquizado con portón oscuro, aviso corpóreo y patio de maniobras pavimentado.",
  },
];




export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export type CategorySlug = "comercial" | "iglesias" | "viviendas" | "remodelaciones" | "otros";

export const projectCategory: Record<string, CategorySlug> = {
  ecohome: "viviendas",
  "multifamiliar-chapinero": "viviendas",
  "torre-miradores-uis": "viviendas",
  "iglesia-santa-rita": "iglesias",
  "capilla-nuestra-senora-del-cobre": "iglesias",
  "capilla-divino-nino-la-campina": "iglesias",
  "casa-cural-torcoroma": "iglesias",
  "coworking-comfanorte": "comercial",
  "optica-zugo": "comercial",
  "home-burgers": "comercial",
  "dc-ingenieria": "comercial",
  "local-ceiba": "comercial",
  "villa-chirama": "comercial",
  "banos-eds-rivera": "comercial",
  "locales-caobos": "comercial",
  dres: "comercial",
  natucampo: "comercial",
  americancargo: "comercial",
  "parqueadero-caobos": "comercial",
  
  "remodelacion-la-primavera": "remodelaciones",
  "remodelacion-la-primavera-02": "remodelaciones",
  "apto-san-luis": "remodelaciones",
  "apto-colsag": "remodelaciones",
  "centro-vacacional-comfaoriente": "otros",
  "centro-desarrollo-juvenil": "otros",
  "rincon-de-alicante": "otros",
  "peaje-los-acacios": "otros",
  "aula-modular-mompox": "otros",
  "acceso-la-reserva": "otros",
  "terraza-comfanorte": "otros",
  "cocina-social-bucaramanga": "otros",
  "bodega-barbosa": "otros",
};

export const categories: {
  slug: CategorySlug;
  number: string;
  title: string;
  description: string;
}[] = [
  {
    slug: "comercial",
    number: "01",
    title: "Comercial",
    description: "Retail, oficinas y espacios corporativos con identidad y experiencia de marca.",
  },
  {
    slug: "iglesias",
    number: "02",
    title: "Iglesias",
    description: "Arquitectura religiosa contemporánea, luz controlada y espacios de recogimiento.",
  },
  {
    slug: "viviendas",
    number: "03",
    title: "Viviendas",
    description: "Vivienda unifamiliar, multifamiliar y en altura diseñada para habitar mejor.",
  },
  {
    slug: "remodelaciones",
    number: "04",
    title: "Remodelaciones",
    description: "Intervenciones que reactivan espacios existentes con precisión técnica.",
  },
  {
    slug: "otros",
    number: "05",
    title: "Otros",
    description: "Equipamientos culturales, turismo y proyectos de escala urbana.",
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getProjectsByCategory = (slug: string) =>
  projects.filter((p) => projectCategory[p.slug] === slug);
