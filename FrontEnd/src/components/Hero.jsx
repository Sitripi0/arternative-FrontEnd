import React from "react";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="h-120 md:h-[80dvh] flex flex-col bg-[url('https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1920')] bg-cover bg-center bg-no-repeat rounded-2xl">
        <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl text-white">Bringing Art to everything</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;