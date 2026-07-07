"use client";

import { SubmitEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Product } from "@/types/product";

type CreateProductFormProps = {
  onProductCreated: (product: Product) => void;
};

export function CreateProduct({
  onProductCreated,
}: CreateProductFormProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError("Product title is required.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: trimmedTitle,
          price,
          cost,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create product.");
      }

      onProductCreated(data);
      setTitle("");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-lg border bg-card p-6"
    >
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Create Product</h2>
        <p className="text-sm text-muted-foreground">
          Add a new product to the list.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1 space-y-2">
          <Label htmlFor="product-title">Product title</Label>

          <Input
            id="product-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter product title"
            disabled={isSubmitting}
          />
          <Input
          id="product-price"
          type="number"
          value={price}
          onChange={(event) => setPrice(parseFloat(event.target.value))}
          placeholder="Enter product price"
          disabled={isSubmitting}
        />
        <Input
          id="product-cost"
          type="number"
          value={cost}
          onChange={(event) => setCost(parseFloat(event.target.value))}
          placeholder="Enter product cost"
          disabled={isSubmitting}
        />
        </div>


        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Product"}
        </Button>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {error}
        </p>
      )}
    </form>
  );
}