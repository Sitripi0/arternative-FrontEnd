import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function CreatePost() {
  const navigate = useNavigate();
  const { user, isLoggedIn, API_URL } = useContext(AuthContext);

  // Get today's date in YYYY-MM-DD format for min attribute and validation
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    title: "",
    text: "",
    typeOfPost: "",
    category: "",
    mediaUrl: "",
    location: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate date not earlier than today
    if (form.date && form.date < today) {
      alert("Please select today's date or a future date.");
      return;
    }

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/posts`, form, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/posts"))
      .catch((err) => console.error("Error on creating post:", err));
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <h2 className="text-xl font-semibold text-gray-700">Login to create a post.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Create a post.</h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            placeholder="Post Title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="text"
            value={form.text}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            placeholder="Write your description..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Post Type</label>
            <select
              name="typeOfPost"
              value={form.typeOfPost}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select</option>
              <option value="release">Release</option>
              <option value="event">Event</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="other">Other</option>
              <option value="music">Music</option>
              <option value="visual">Visual</option>
              <option value="esculpture">Esculpture</option>
              <option value="performance">Performance</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Media URL</label>
            <input
              type="text"
              name="mediaUrl"
              value={form.mediaUrl}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="www.example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="City,Country"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            min={today} 
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="inline-block px-6 py-2 text-white bg-amber-600 hover:bg-amber-700 rounded-md shadow-md transition"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
