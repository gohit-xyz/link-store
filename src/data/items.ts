import { StaticImageData } from "next/image";

// Importar imágenes de productos
import p1 from "../assets/images/products/p1.jpg";
import p2 from "../assets/images/products/p2.webp";
import p3 from "../assets/images/products/p3.webp";
import a1 from "../assets/images/products/a1.webp";
import a2 from "../assets/images/products/a2.webp";
import a3 from "../assets/images/products/a3.webp";
import a4 from "../assets/images/products/a4.webp";
import c1 from "../assets/images/products/c1.webp";
import c2 from "../assets/images/products/c2.webp";
import c3 from "../assets/images/products/c3.jpeg";

export interface Service {
  id: number;
  title: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  category: string;
  price?: string;
}

export const SERVICES: Service[] = [
  { id: 1, title: "Cambio de pantalla" },
  { id: 2, title: "Reparaciones" },
  { id: 3, title: "Cambio de sistema" },
  { id: 4, title: "Detección de errores" },
  { id: 5, title: "Otros" },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Smartphone Premium",
    description: "El mejor smartphone del mercado",
    image: p1,
    category: "Teléfonos",
    price: "S/ 999",
  },
  {
    id: 2,
    title: "Smartphone Pro Max",
    description: "Tecnología de última generación",
    image: p2,
    category: "Teléfonos",
    price: "S/ 1,299",
  },
  {
    id: 3,
    title: "Smartphone Essential",
    description: "Calidad y precio accesible",
    image: p3,
    category: "Teléfonos",
    price: "S/ 699",
  },
  {
    id: 4,
    title: "Audífonos Bluetooth Pro",
    description: "Sonido envolvente premium",
    image: a1,
    category: "Accesorios",
    price: "S/ 149",
  },
  {
    id: 5,
    title: "Audífonos Inalámbricos",
    description: "Comodidad y calidad de audio",
    image: a2,
    category: "Accesorios",
    price: "S/ 89",
  },
  {
    id: 6,
    title: "Audífonos Deportivos",
    description: "Perfectos para tu entrenamiento",
    image: a3,
    category: "Accesorios",
    price: "S/ 59",
  },
  {
    id: 7,
    title: "Audífonos Gaming",
    description: "Experiencia inmersiva",
    image: a4,
    category: "Accesorios",
    price: "S/ 199",
  },
  {
    id: 8,
    title: "Cargador Rápido 65W",
    description: "Carga ultra rápida",
    image: c1,
    category: "Cargadores",
    price: "S/ 79",
  },
  {
    id: 9,
    title: "Cargador Inalámbrico",
    description: "Carga sin cables",
    image: c2,
    category: "Cargadores",
    price: "S/ 99",
  },
  {
    id: 10,
    title: "Cable USB-C Premium",
    description: "Duradero y resistente",
    image: c3,
    category: "Cables",
    price: "S/ 29",
  },
];
