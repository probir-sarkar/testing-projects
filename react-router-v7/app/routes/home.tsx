import { getAllProducts } from "~/api/products";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/Button";
import { ProductGrid } from "~/components/product";

export async function loader() {
  const product = await getAllProducts()
  return product;
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Style Store" },
    { name: "description", content: "Welcome to Style Store" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Fashion background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            New Arrivals
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover our latest collection of premium clothing and accessories.
          </p>
          <div className="mt-10">
            <Button variant="secondary">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        {/* {loading ? (
        <LoadingSpinner />
      ) : (
        <ProductGrid products={products} />
      )} */}
        <ProductGrid products={loaderData} />
      </div>
    </div>
  );
}
