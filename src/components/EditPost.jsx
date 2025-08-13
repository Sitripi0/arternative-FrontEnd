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
    date: "",
  });

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/posts/${id}`)
      .then((res) => {
        const { title, text, typeOfPost, category, date } = res.data;
        setFormData({ title, text, typeOfPost, category, date });
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
      .then((res) => {
        console.log("Post updated:", res.data);
        navigate(`/api/posts/${id}`);
      })
      .catch((err) => {
        console.error("Error updating post:", err);
      });
  };

  if (loading) return <p className="text-center mt-10">Loading post data...</p>;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="text"
          placeholder="Text"
          value={formData.text}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={6}
          required
        />

        <input
          type="text"
          name="typeOfPost"
          placeholder="Type of Post"
          value={formData.typeOfPost}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          name="date"
          value={formData.date?.split("T")[0] || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
