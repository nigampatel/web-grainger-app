
export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl"> 
        <section className="mb-12 max-w-3xl">
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            This sample application demonstrates a simple product management
            workflow. Users can browse existing products and add new products
            through a React frontend that communicates with a RESTful API.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Tools and technologies
          </h2>

          <div className="mt-5 text-lg leading-8 text-muted-foreground">
            <p>Next.js - Meta framework for building React applications</p>
            <p>React - Library for building user interfaces</p>
            <p>TypeScript - Superset of JavaScript that adds static typing</p>
            <p>Tailwind CSS - Utility-first CSS framework for styling</p>
            <p>shadcn/ui - Component library built on top of Radix UI</p>
          </div>
        </section>
      </div>
    </main>
  );
}