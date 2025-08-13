import React, { useState } from "react";

const ArtistPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio1: "",
    bio2: "",
    email: "",
    twitter: "",
    instagram: "",
    avatarUrl: "",
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Profile */}
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <img
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
            src={
              formData.avatarUrl ||
              "https://via.placeholder.com/64?text=Avatar"
            }
            alt="Avatar"
          />
        </div>

        <div className="grow">
          <input
            type="text"
            name="name"
            placeholder="Artist Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-lg font-medium text-gray-800 border-b border-gray-300 focus:outline-none focus:border-gray-600"
          />
          <input
            type="text"
            name="title"
            placeholder="Profession / Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full text-sm text-gray-600 border-b border-gray-300 focus:outline-none focus:border-gray-600 mt-1"
          />
        </div>
      </div>
      {/* End Profile */}

      {/* About */}
      <div className="mt-8 space-y-4">
        <textarea
          name="bio1"
          placeholder="First bio paragraph"
          value={formData.bio1}
          onChange={handleChange}
          rows={3}
          className="w-full text-sm text-gray-600 border border-gray-300 rounded p-2 resize-y focus:outline-none focus:border-gray-600"
        />

        <textarea
          name="bio2"
          placeholder="Second bio paragraph"
          value={formData.bio2}
          onChange={handleChange}
          rows={3}
          className="w-full text-sm text-gray-600 border border-gray-300 rounded p-2 resize-y focus:outline-none focus:border-gray-600"
        />

        <ul className="flex flex-col gap-y-3 mt-5">
          <li className="flex items-center gap-x-2.5">
            <svg
              className="shrink-0 w-3.5 h-3.5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="text-[13px] text-gray-500 underline hover:text-gray-800 focus:outline-none focus:decoration-2 bg-transparent border-b border-gray-300"
            />
          </li>

          <li className="flex items-center gap-x-2.5">
            <svg
              className="shrink-0 w-3.5 h-3.5 text-gray-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z"
                fill="currentColor"
              />
            </svg>
            <input
              type="text"
              name="twitter"
              placeholder="Twitter handle"
              value={formData.twitter}
              onChange={handleChange}
              className="text-[13px] text-gray-500 underline hover:text-gray-800 focus:outline-none focus:decoration-2 bg-transparent border-b border-gray-300"
            />
          </li>

          <li className="flex items-center gap-x-2.5">
            <svg
              className="shrink-0 w-3.5 h-3.5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
            <input
              type="text"
              name="instagram"
              placeholder="Instagram handle"
              value={formData.instagram}
              onChange={handleChange}
              className="text-[13px] text-gray-500 underline hover:text-gray-800 focus:outline-none focus:decoration-2 bg-transparent border-b border-gray-300"
            />
          </li>
        </ul>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Avatar URL
          </label>
          <input
            type="url"
            name="avatarUrl"
            placeholder="https://example.com/avatar.jpg"
            value={formData.avatarUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-600"
          />
        </div>
      </div>
      {/* End About */}
    </div>
  );
};

export default ArtistPage;
