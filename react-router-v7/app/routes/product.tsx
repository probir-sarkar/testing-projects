import { getProductById } from "~/api/products";
import type { Route } from "./+types/product";
import { ProductRating } from "~/components/product";
import { Button } from "~/components/ui/Button";
import { ShoppingCart } from "lucide-react";
import Navbar from "~/components/Navbar";

export async function loader({ params }: Route.LoaderArgs) {
  try {
    if (!params.id) {
      throw new Error("Product ID is required");
    }
    const product = await getProductById(params.id);
    if (!product?.id) {
      throw new Error("Product not found");
    }
    return product;
  }
  catch (error) {
    throw new Error("Product not found");
  }
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.title || "New React Router App" },
    { name: "description", content: data?.description || "Welcome to React Router!" },
  ];
}

export default function Product({ loaderData: product }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div className="flex justify-center bg-white rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>

          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3">
              <ProductRating rate={product.rating.rate} count={product.rating.count} />
            </div>

            <div className="mt-6">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <div className="mt-2 prose prose-sm text-gray-500">
                {product.description}
              </div>
            </div>

            <div className="mt-10">
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
