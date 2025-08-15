import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  console.log("Renderizando header con items:", totalItems);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🐞</span>
            <h1 className="text-2xl font-bold text-green-800">Mariquitas Store</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-green-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};