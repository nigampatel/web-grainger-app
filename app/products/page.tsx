"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/types/product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to load products.");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);


  return (
    <main className="bg-muted/40 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Products
          </h1>

          <p className="mt-2 text-muted-foreground">
            Browse and create products.
          </p>
        </header>

        {isLoading && (
          <p className="text-muted-foreground">
            Loading products...
          </p>
        )}

        {error && (
          <p role="alert" className="text-destructive">
            {error}
          </p>
        )}

        {!isLoading && !error && products.length === 0 && (
          <p className="text-muted-foreground">
            No products found.
          </p>
        )}

        {!isLoading && !error && products.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}