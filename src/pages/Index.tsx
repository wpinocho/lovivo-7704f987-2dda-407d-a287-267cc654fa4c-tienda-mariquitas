import { useState } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  console.log("Renderizando página principal de la tienda de mariquitas");
  
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-pink-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
              🐞 Tienda de Mariquitas 🐞
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra increíble colección de mariquitas decorativas, 
              juguetes y accesorios temáticos. ¡Perfectos para amantes de la naturaleza!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
            <div className="lg:col-span-1">
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;