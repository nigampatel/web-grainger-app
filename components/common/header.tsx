import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
   <header className="border-b bg-background px-6">
  <div className="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center">
    <Link
      href="/"
      className="justify-self-start text-xl font-bold tracking-tight"
    >
      Grainger Interview Sample App
    </Link>

    <nav
      aria-label="Main navigation"
      className="flex items-center gap-2 justify-self-center"
    >
      <Link
        href="/products"
        className="rounded-md px-4 py-2 text-sm font-medium hover:bg-muted hover:underline underline-offset-4"
      >
        Products
      </Link>

      <Link
        href="/products/new"
        className="rounded-md px-4 py-2 text-sm font-medium hover:bg-muted hover:underline underline-offset-4"
      >
        Add Product
      </Link>
    </nav>

    <div aria-hidden="true" />
  </div>
</header>
  );
}