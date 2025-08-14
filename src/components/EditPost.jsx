import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function EditPost() {
  const { id } = useParams();
  const { API_URL } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    typeOfPost: "",
    category: "",
    mediaUrl: "",
    location: "",
    date: "",
  });

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/posts/${id}`)
      .then((res) => {
        const {
          title,
          text,
          typeOfPost,
          category,
          mediaUrl,
          location,
          date,
        } = res.data;
        setFormData({
          title,
          text,
          typeOfPost,
          category,
          mediaUrl: mediaUrl || "",
          location: location || "",
          date: date ? date.split("T")[0] : "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post for editing:", err);
        setLoading(false);
      });
  }, [API_URL, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/api/posts/${id}`, formData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate(`/api/posts/${id}`); 
      })
      .catch((err) => {
        console.error("Error updating post:", err);
      });
  };

  if (loading) return <p className="text-center mt-10">Loading post data...</p>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Edit Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            placeholder="Title of the post"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description*</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            placeholder="Write your description..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Post Type*</label>
            <select
              name="typeOfPost"
              value={formData.typeOfPost}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="">Select</option>
              <option value="release">Release</option>
              <option value="event">Event</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category*</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="music">Music</option>
              <option value="visual">Visual</option>
              <option value="esculpture">Esculpture</option>
              <option value="performance">Performance</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Media URL</label>
            <input
              type="text"
              name="mediaUrl"
              value={formData.mediaUrl}
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
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              placeholder="City, Country"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date*</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="inline-block px-6 py-2 text-white bg-amber-600 hover:bg-amber-700 rounded-md shadow-md transition"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
