import type { Product } from "@/types/product";

const products: Product[] = [
    {
        id: 1,
        title: "Product 1",
        price: 19.99,
        cost: 10.00
    },
    {
        id: 2,
        title: "Product 2",
        price: 29.99,
        cost: 15.00
    },
    {
        id: 3, 
        title: "Product 3",
        price: 39.99,
        cost: 20.00
    },
    {
        id: 4,
        title: "Product 4",
        price: 49.99,
        cost: 25.00
    }
];

export async function getProducts(): Promise<Product[]> {
    return products.map(product => ({
        ...product,
        grossProfitPercentage: product.price !== 0 ? ((product.price - product.cost) / product.price) * 100 : 0
    }));
}
