"use client";

import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { getProducts } from "../../../services/product.service";

export default function DashboardProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-16">

          <h1 className="text-5xl font-bold">
            Manage Products
          </h1>

          <button className="border border-white px-6 py-3">
            Add Artwork
          </button>

        </div>

        <div className="space-y-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="border border-white/10 bg-white/5 p-6 flex items-center justify-between"
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {product.title}
                </h2>

                <p className="text-white/60 mt-2">
                  ₹{product.price}
                </p>

              </div>

              <div className="flex gap-4">

                <button className="border border-white px-4 py-2">
                  Edit
                </button>

                <button className="border border-red-500 text-red-500 px-4 py-2">
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}