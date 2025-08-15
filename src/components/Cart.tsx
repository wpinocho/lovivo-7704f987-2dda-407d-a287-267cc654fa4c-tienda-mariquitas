import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  console.log("Renderizando carrito con", cartItems.length, "productos únicos");

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("El carrito está vacío");
      return;
    }
    toast.success("¡Gracias por tu compra! 🐞 Procesando pedido...");
    console.log("Procesando checkout con items:", cartItems);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          Carrito ({totalItems})
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🛒</div>
            <p className="text-gray-500">Tu carrito está vacío</p>
            <p className="text-sm text-gray-400 mt-2">
              ¡Agrega algunas mariquitas!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl">{item.image}</div>
                
                <div className="flex-grow">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-green-600 font-semibold">${item.price}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 p-0"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 p-0"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 p-0 ml-2"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-bold text-green-700">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <Button 
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Finalizar Compra 🐞
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};