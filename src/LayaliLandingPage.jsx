
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  { id: 1, name: "Silk Pajama", image: "/images/silk1.jpg", price: "299 DH" },
  { id: 2, name: "Cotton Set", image: "/images/cotton1.jpg", price: "199 DH" },
  { id: 3, name: "Lace Nightwear", image: "/images/lace1.jpg", price: "249 DH" },
];

export default function LayaliLandingPage() {
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-pink-700">Layali | ليالي</h1>
        <p className="text-pink-600 mt-2">Feel the elegance at night</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="bg-white shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-2xl" />
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-pink-700 font-bold">{product.price}</p>
              <Button className="mt-2 w-full bg-pink-600 hover:bg-pink-700">Order Now</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500">
        &copy; 2025 Layali. All rights reserved.
      </footer>
    </div>
  );
}
