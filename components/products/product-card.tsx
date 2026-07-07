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
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Gross Profit: {product.grossProfitPercentage.toFixed(2)}%</p>
      </CardContent>
    </Card>
  );
}
