import React from "react";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
  
<div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
  }' className="relative">
  <div className="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
          <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Visual </span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
          <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Escenica </span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
          <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">Sonora </span>
        </div>
      </div>
    </div>
  </div>

  <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 start-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden">
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span className="sr-only">Previous</span>
  </button>
  <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 end-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-hidden">
    <span className="sr-only">Next</span>
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>

  <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
</div>

    </section>
  );
};

export default Hero;