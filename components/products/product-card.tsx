import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>Product ID: {product.id}</p>
      </CardContent>
    </Card>
  );
}