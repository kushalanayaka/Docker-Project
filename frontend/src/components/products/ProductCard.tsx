import { Product } from "../../types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
  <div className="bg-white/5 border border-white/10 overflow-hidden">
      
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-semibold">
          {product.title}
        </h3>

        <p className="text-white/60 mt-2 text-sm line-clamp-3">
          {product.story}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">
            ₹{product.price}
          </span>

          <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-all">
            Request Artwork
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}