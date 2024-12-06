import image1 from "../assets/apple.jpg";
import image2 from "../assets/banana.jpg";
import image3 from "../assets/orange.png";
import image4 from "../assets/stawberry.jpg";
import image5 from "../assets/mango.jpg";
import image6 from "../assets/pineapple.jpg";
import image7 from "../assets/kiwi.jpg";
import image8 from "../assets/grapes.jpg";
import image9 from "../assets/watermelon.jpg";
import image10 from "../assets/papaya.jpg";

export const products = [
  {
    id: 1,
    name: "Apple",
    category: "Pome Fruits",
    price: 1.5,
    originalPrice: 2.0,
    image: image1,
    onSale: true,
  },
  {
    id: 2,
    name: "Banana",
    category: "Tropical Fruits",
    price: 0.5,
    image: image2,
    onSale: false,
  },
  {
    id: 3,
    name: "Orange",
    category: "Citrus Fruits",
    price: 1.0,
    originalPrice: 1.2,
    image: image3,
    onSale: true,
  },
  {
    id: 4,
    name: "Strawberry",
    category: "Berries",
    price: 2.5,
    image: image4,
    onSale: false,
  },
  {
    id: 5,
    name: "Mango",
    category: "Tropical Fruits",
    price: 1.8,
    originalPrice: 2.5,
    image: image5,
    onSale: true,
  },
  {
    id: 6,
    name: "Pineapple",
    category: "Tropical Fruits",
    price: 3.0,
    image: image6,
    onSale: false,
  },
  {
    id: 7,
    name: "Kiwi",
    category: "Berries",
    price: 2.0,
    originalPrice: 2.5,
    image: image7,
    onSale: true,
  },
  {
    id: 8,
    name: "Grapes",
    category: "Berries",
    price: 2.2,
    image: image8,
    onSale: false,
  },
  {
    id: 9,
    name: "Watermelon",
    category: "Melons",
    price: 3.5,
    originalPrice: 4.0,
    image: image9,
    onSale: true,
  },
  {
    id: 10,
    name: "Papaya",
    category: "Tropical Fruits",
    price: 2.3,
    image: image10,
    onSale: false,
  },
];
