import React from "react";

const ProductCard = ({ image, name, price, notes, origin, region }) => {
  return (
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl">
          <img className="object-cover rounded-2xl w-full h-full" src={image} alt={name} />
        </div>
        <div className="pt-4">
          <h3 className="font-medium md:text-lg text-black dark:text-white">{name}</h3>
          <p className="mt-2 font-semibold text-black dark:text-white">${price}</p>
        </div>
      </div>
      <div className="mb-2 mt-4 text-sm">
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-neutral-700">
          <div className="py-3 flex justify-between">
            <span className="font-medium text-black dark:text-white">Tasting Notes:</span>
            <span className="text-black dark:text-white">{notes}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="font-medium text-black dark:text-white">Origin:</span>
            <span className="text-black dark:text-white">{origin}</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="font-medium text-black dark:text-white">Region:</span>
            <span className="text-black dark:text-white">{region}</span>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <a href="#" className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl bg-yellow-400 text-black hover:bg-yellow-500">Buy now</a>
      </div>
    </div>
  );
};

export default ProductCard;