"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../services/product.service";
import { Product } from "../../types/product";
import ProductCard from "../products/ProductCard";
import ProductCardSkeleton from "../products/ProductCardSkeleton";

export default function FeaturedArtworks() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data);

      setLoading(false);

    } catch (error) {
      console.error(error);

      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h2 className="text-5xl font-bold">
            Featured Artworks
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl">
            A curated collection of artworks carrying emotions,
            stories, and imagination.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

  {loading ? (
    <>
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </>
  ) : (
    products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))
  )}

</div>

      </div>
    </section>
  );
}