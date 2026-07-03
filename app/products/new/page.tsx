"use client";

import { useRouter } from "next/navigation";
import { CreateProduct } from "@/components/products/create-product";
import type { Product } from "@/types/product";

export default function NewProductPage() {
  const router = useRouter();

  function handleProductCreated(_product: Product) {
    router.push("/products");
  }

  return (
    <main className="bg-muted/40 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Add Product
          </h1>

          <p className="mt-2 text-muted-foreground">
            Enter the product information below.
          </p>
        </header>

        <CreateProduct
          onProductCreated={handleProductCreated}
        />
      </div>
    </main>
  );
}