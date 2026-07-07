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

export async function GET() {
  // Simulate a short API delay.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return Response.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const title = body.title?.trim();
  const price = body.price ?? 0;
  const cost = body.cost ?? 0;

  console.log("Received POST request with title:", title, "price:", price, "cost:", cost);

  if (!title) {
    return Response.json(
      { message: "Product title is required." },
      { status: 400 }
    );
  }

  const newProduct: Product = {
    id: Date.now(),
    title,
    price,
    cost
  };

  products.push(newProduct);

  return Response.json(newProduct, {
    status: 201,
  });
}

// export async function GET() {
//   // Optional: simulate a short API delay.
//   await new Promise((resolve) => setTimeout(resolve, 500));

//   try {
//     const response = await fetch("https://dummyjson.com/products", {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data = await response.json();

//     return Response.json(data.products);
//   } catch (error) {
//     console.error("GET /api/products error:", error);

//     return Response.json(
//       { message: "Unable to load products" },
//       { status: 500 }
//     );
//   }
//}
