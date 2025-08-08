import React from 'react';
import Hero from "../components/Hero";
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  return (
    <>
      <h1 className= "text-2xl">NEWS</h1>
      <Hero />
      <ProductGrid/>

    </>
  );
};

export default HomePage;
