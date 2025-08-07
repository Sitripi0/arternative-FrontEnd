import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div className="dark:bg-neutral-900 min-h-screen flex flex-col">
      <Header />
      <main id="content">
        <Hero />
        <ProductGrid />
        <ProductCard/>
      </main>
    </div>
  );
};

export default App;