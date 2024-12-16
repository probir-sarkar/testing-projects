import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
import type { Product } from '~/types/product';


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain object-center group-hover:opacity-75"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-700 truncate">{product.title}</h3>
          <div className="mt-2 flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-500">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}