import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t md:border-t-0 border-gray-200 dark:border-neutral-700">
      
      <div className="lg:col-span-3 flex items-center">
          <a href="/">
            <img
              src="/logo module3.png"
              alt="ArterNative logo"
              className="h-auto w-50"
            />
          </a>
        </div>
            
      <div className="w-full max-w-7xl py-10 md:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          {/* Logo */}
          <div className="text-center md:text-start">
            <svg className="w-24 h-auto mx-auto md:mx-0" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Puedes pegar aquí el contenido completo del <svg> si lo necesitas */}
              <circle cx="13" cy="16.5214" r="5" className="fill-black dark:fill-white" fill="currentColor" />
              {/* Más contenido del logo... */}
            </svg>
          </div>
          {/* Links */}
          <ul className="text-center">
            {['About', 'Services', 'Blog'].map((item, index) => (
              <li
                key={item}
                className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black dark:before:text-white"
              >
                <a
                  href="#"
                  className="inline-flex gap-x-2 text-sm text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes sociales (puedes completar con íconos reales si lo deseas) */}
          
          <div className="text-center md:text-end space-x-2">

            <a href="#" className="size-8 inline-flex justify-center items-center gap-x-2 text-sm rounded-full bg-black text-white hover:bg-neutral-800">
              FB
            </a>
            <a href="#" className="size-8 inline-flex justify-center items-center gap-x-2 text-sm rounded-full bg-black text-white hover:bg-neutral-800">
              IG
            </a>
            <a href="#" className="size-8 inline-flex justify-center items-center gap-x-2 text-sm rounded-full bg-black text-white hover:bg-neutral-800">
              X
            </a>
          </div>


          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
