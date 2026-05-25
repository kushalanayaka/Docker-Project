"use client";

import { use, useEffect, useState } from "react";
import { getProductById } from "../../../services/product.service";
import { Product } from "../../../types/product";
import RequestArtworkModal from "../../../components/products/RequestArtworkModal";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailsPage({ params }: Props) {
  const { id } = use(params);

  const [product, setProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading artwork...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-[700px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[0.3em] text-white/40 text-sm">
            Featured Artwork
          </p>

          <h1 className="text-6xl font-bold mt-4 leading-tight">
            {product.title}
          </h1>

          <p className="text-3xl mt-6 font-semibold">
            ₹{product.price}
          </p>

          <p className="mt-8 text-white/70 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* STORY */}
          <div className="mt-12 border-t border-white/10 pt-8">

            <h2 className="text-2xl font-semibold mb-4">
              The Story
            </h2>

            <p className="text-white/70 leading-loose">
              {product.story}
            </p>

          </div>

          {/* BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-12 border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 w-fit"
          >
            Request This Artwork
          </button>

        </div>

      </section>
      {showModal && (
        <RequestArtworkModal
          productId={product.id}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
}