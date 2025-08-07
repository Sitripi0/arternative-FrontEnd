import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://preline.co/assets/img/pro/coffee-shop/img1.png",
    name: "Beija Flor",
    price: "5.50",
    notes: "Hazelnut, Grape, Milk Chocolate",
    origin: "Brazil",
    region: "San Paulo"
  },
  {
    image: "https://preline.co/assets/img/pro/coffee-shop/img2.png",
    name: "El Mirador",
    price: "7.50",
    notes: "Red Apple, Caramel, Almond",
    origin: "Colombia",
    region: "Manizales"
  }
  // Agrega más productos si deseas
];

const ProductGrid = () => {
  return (
    <section className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h1 className="font-medium text-black text-3xl sm:text-4xl dark:text-white">New this season</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;