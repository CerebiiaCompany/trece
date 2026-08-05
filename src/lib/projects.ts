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
  pdf?: string;
  challenge: string;
  solution: string;
};

import p1 from "@/assets/p1-ecohome.jpg";
import p2 from "@/assets/p2-multifamiliar.jpg";

import p4 from "@/assets/p4-terraza.jpg";
import p5 from "@/assets/p5-vacacional.jpg";
import p6 from "@/assets/p6-coworking.jpg";
import p7 from "@/assets/p7-optica.jpg";
import p8 from "@/assets/p8-torre.jpg";
import p9 from "@/assets/p9-juvenil.jpg";
import santaRitaHero from "@/assets/santa-rita-fachada.png.asset.json";
import santaRitaPdf from "@/assets/santa-rita-de-casia.pdf.asset.json";
import cobre1 from "@/assets/capilla-cobre-1.jpg.asset.json";
import cobre2 from "@/assets/capilla-cobre-2.jpg.asset.json";
import cobre3 from "@/assets/capilla-cobre-3.jpg.asset.json";
import cobre4 from "@/assets/capilla-cobre-4.jpg.asset.json";
import cobre5 from "@/assets/capilla-cobre-5.jpg.asset.json";
import cobre6 from "@/assets/capilla-cobre-6.jpg.asset.json";
import dn2 from "@/assets/divino-nino-2.jpg.asset.json";
import dn6 from "@/assets/divino-nino-6.jpg.asset.json";
import dn7 from "@/assets/divino-nino-7.jpg.asset.json";
import dn8 from "@/assets/divino-nino-8.jpg.asset.json";
import dn11 from "@/assets/divino-nino-11.jpg.asset.json";
import dn12 from "@/assets/divino-nino-12.jpg.asset.json";
import tor1 from "@/assets/torcoroma-1.jpg.asset.json";
import tor4 from "@/assets/torcoroma-4.jpg.asset.json";
import tor7 from "@/assets/torcoroma-7-2.jpg.asset.json";
import tor17 from "@/assets/torcoroma-17.jpg.asset.json";


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
    image: santaRitaHero.url,
    pdf: santaRitaPdf.url,
    challenge:
      "Traducir un lenguaje litúrgico tradicional a una expresión contemporánea, generando un espacio de recogimiento con luz cenital controlada y una presencia urbana serena.",
    solution:
      "Volumen blanco de sección basilical simplificada, cruz esculpida en bajorrelieve y vitrales verticales que dibujan la luz sobre el altar a lo largo del día.",
  },
  {
    slug: "terraza-comfanorte",
    number: "04",
    title: "Terraza Social Comfanorte",
    location: "Cúcuta",
    category: "Espacio Social",
    client: "JASA Ltda.",
    year: "2023",
    tools: ["SketchUp", "Lumion", "AutoCAD"],
    image: p4,
    challenge:
      "Transformar una cubierta subutilizada en un espacio social flexible para eventos corporativos y familiares, resistente al clima cálido de Cúcuta.",
    solution:
      "Pérgola en madera laminada con iluminación integrada, mobiliario modular y jardineras perimetrales que suavizan la relación con la ciudad.",
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
    image: p6,
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
    image: p7,
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
    image: cobre4.url,
    gallery: [cobre4.url, cobre1.url, cobre2.url, cobre5.url, cobre3.url, cobre6.url],
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
    image: dn2.url,
    gallery: [dn2.url, dn12.url, dn6.url, dn8.url, dn7.url, dn11.url],
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
    image: tor1.url,
    gallery: [tor1.url, tor4.url, tor7.url, tor17.url],
    challenge:
      "Resolver en un lote alargado la casa cural y el despacho parroquial, integrando atención al público, áreas administrativas y la vivienda del sacerdote con privacidad, ventilación cruzada e iluminación natural en todo el recorrido.",
    solution:
      "Una planta organizada en torno a un patio central longitudinal con pérgola metálica y jardineras, que separa el área pública del despacho de la zona íntima de habitaciones; fachada urbana en ladrillo gris, celosías de madera y voladizo continuo que protege el acceso.",
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
  "coworking-comfanorte": "comercial",
  "optica-zugo": "comercial",
  "terraza-comfanorte": "remodelaciones",
  "centro-vacacional-comfaoriente": "otros",
  "centro-desarrollo-juvenil": "otros",
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
