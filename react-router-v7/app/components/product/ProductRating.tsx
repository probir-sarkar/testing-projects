import { Star } from 'lucide-react';

interface ProductRatingProps {
  rate: number;
  count: number;
}

export function ProductRating({ rate, count }: ProductRatingProps) {
  return (
    <div className="flex items-center">
      <Star className="h-4 w-4 text-yellow-400 fill-current" />
      <span className="ml-1 text-sm text-gray-500">
        {rate} ({count} reviews)
      </span>
    </div>
  );
}