import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function DeletePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { API_URL } = useContext(AuthContext);
  const [isDeleting, setIsDeleting] = useState(false);

  // Defensive check for missing ID
  if (!id) {
    return <p>Invalid post ID.</p>;
  }

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    setIsDeleting(true);
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        console.log("Post deleted.");
        navigate("/posts");
      })
      .catch((err) => {
        console.error("Error deleting post:", err);
        setIsDeleting(false); 
      });
  };

  return (
    <div className="py-6">
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className={`${
          isDeleting ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        } text-white px-4 py-2 rounded`}
      >
        {isDeleting ? "Deleting..." : "Delete Post"}
      </button>
    </div>
  );
}

export default DeletePost;
