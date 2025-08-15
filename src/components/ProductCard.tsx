import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product, useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Agregando producto al carrito:", product.name);
    addToCart(product);
    toast.success(`${product.name} agregado al carrito! 🐞`);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-300">
      <CardHeader className="text-center">
        <div className="text-6xl mb-2">{product.image}</div>
        <CardTitle className="text-lg font-semibold text-gray-800">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {product.category}
          </Badge>
          <span className="text-2xl font-bold text-green-700">
            ${product.price}
          </span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};