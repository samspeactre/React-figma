import type { Product } from "../types/product.interface";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.jpg"
import product8 from "../assets/product8.jpg"

export const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image: product1,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Minimalist lounge chair",
    price: 1500000,
    originalPrice: 2500000,
    image: product2,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: product3,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    originalPrice: 700000,
    image: product4,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: 150000,
    image: product5,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: 80000,
    image: product6,
  },
  {
    id: 7,
    name: "Potty",
    description: "Minimalist flower pot",
    price: 80000,
    image: product7,
  },
  {
    id: 8,
    name: "Pingky",
    description: "Cute bed set",
    price: 80000,
    image: product8,
  },
];
