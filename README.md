# Grainger Interview App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The goal of the app is to demonstrate a simple product workflow where a user can:

* View a list of products
* Add a new product
* Navigate between the product list and create-product pages
* Used Client side routing

The project is intentionally kept simple so the focus stays on structure, component design, API interaction, and maintainability.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

## Features

### Product List

Users can view all available products on the products page.

```text
/products
```

The page fetches product data from the internal API and displays each product using a reusable card component.

### Add Product

Users can add a new product from a separate page.

```text
/products/new
```

The form validates the product title before submitting it to the API.

### REST API

The app uses a simple REST API built with Next.js Route Handlers.

```text
GET  /api/products
POST /api/products
```

The `GET` endpoint returns the list of products.

The `POST` endpoint creates a new product and returns the created product.

## Project Structure

```text
app/
├── api/
│   └── products/
│       └── route.ts
├── products/
│   ├── page.tsx
│   └── new/
│       └── page.tsx
├── layout.tsx
└── page.tsx

components/
├── common/
│   ├── header.tsx
├── products/
│   ├── create-product.tsx
│   └── product-card.tsx
└── ui/ - shadcn/ui components

types/
└── product.ts
```


## Available Routes

```text
/                  Home page
/products          Product list
/products/new      Add product
/api/products      Product API
```

## Data Storage

The products are currently stored in memory inside the API route.

This was done intentionally to keep the project lightweight and avoid adding database setup.

Because the data is stored in memory, newly added products may be reset when the development server restarts.

## Design Decisions

The product list and product creation workflows are separated into different routes.

Reusable UI is organized into application-specific components and shared shadcn/ui components.

The API is accessed through internal Next.js routes instead of calling data directly from the page. This keeps the frontend separate from the data source and makes it easier to replace the mock storage with a real database later.

