import { ProductCard } from "./ProductCard";
import { Product } from "@/contexts/CartContext";

const products: Product[] = [
  {
    id: 1,
    name: "Mariquita de Peluche Grande",
    price: 25.99,
    image: "🐞",
    description: "Adorable mariquita de peluche suave y esponjosa, perfecta para niños y coleccionistas.",
    category: "Peluches"
  },
  {
    id: 2,
    name: "Figura Decorativa de Mariquita",
    price: 15.50,
    image: "🐞",
    description: "Hermosa figura decorativa de mariquita hecha en cerámica pintada a mano.",
    category: "Decoración"
  },
  {
    id: 3,
    name: "Cojín con Forma de Mariquita",
    price: 18.75,
    image: "🐞",
    description: "Cómodo cojín decorativo con diseño de mariquita, ideal para sofás y camas.",
    category: "Hogar"
  },
  {
    id: 4,
    name: "Mariquita de Jardín Solar",
    price: 32.00,
    image: "🐞",
    description: "Mariquita decorativa con luz solar LED para iluminar tu jardín por las noches.",
    category: "Jardín"
  },
  {
    id: 5,
    name: "Set de Tazas Mariquita",
    price: 22.90,
    image: "🐞",
    description: "Juego de 2 tazas de cerámica con diseño de mariquitas, perfectas para el té.",
    category: "Cocina"
  },
  {
    id: 6,
    name: "Mariquita Interactiva",
    price: 45.00,
    image: "🐞",
    description: "Juguete interactivo que camina y hace sonidos realistas de mariquita.",
    category: "Juguetes"
  },
  {
    id: 7,
    name: "Collar con Dije de Mariquita",
    price: 28.50,
    image: "🐞",
    description: "Elegante collar de plata con dije de mariquita con detalles en esmalte rojo.",
    category: "Joyería"
  },
  {
    id: 8,
    name: "Maceta con Diseño de Mariquita",
    price: 19.99,
    image: "🐞",
    description: "Maceta decorativa con forma de mariquita, perfecta para plantas pequeñas.",
    category: "Jardín"
  }
];

export const ProductGrid = () => {
  console.log("Renderizando grilla con", products.length, "productos");

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};