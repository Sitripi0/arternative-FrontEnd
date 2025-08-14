import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            About Arternative
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
            If you're here, it's probably because you're tired of the same old commercialized art. Arternative is a space where contemporary and independent artists can share their events, releases, and creative work freely.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            className="w-48 h-48 rounded-full mb-6 object-cover"
            src="/about_logo.png"
            alt="Project Logo"
          />
          <p className="text-gray-700 max-w-xl">
            Built with the MERN stack, Arternative is a passion project aimed at both showcasing development skills and creating a real platform for creative minds. Artists can post about their latest work, and users can join the conversation through comments and engagement.
          </p>

          <p className="text-gray-700 mt-4 max-w-xl">
            This is more than just code — it's a growing community built around meaningful expression, artistic freedom, and open discussion.
          </p>

          <div className="mt-8 flex items-center space-x-4">
            <a
              href="https://github.com/Sitripi0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.753-1.333-1.753-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.832 2.807 1.303 3.495.996.108-.776.418-1.303.76-1.602-2.665-.303-5.466-1.333-5.466-5.932 0-1.31.47-2.382 1.236-3.222-.124-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.475 5.922.43.37.814 1.102.814 2.222v3.293c0 .32.217.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
