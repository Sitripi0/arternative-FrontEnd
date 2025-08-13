import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { API_URL, user, isLoggedIn } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/posts/${postId}`)
      .then((res) => {
        setComments(res.data.comments || []);
      })
      .catch((err) => console.error("Error loading comments:", err));
  }, [API_URL, postId]);

  const handleAddComment = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_URL}/api/posts/${postId}/comments`,
        { text: newComment },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((res) => {
        setComments((prev) => [...prev, res.data]);
        setNewComment("");
      })
      .catch((err) => console.error("Error posting comment:", err));
  };

  const handleDelete = (commentId) => {
    axios
      .delete(`${API_URL}/api/posts/${postId}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setComments((prev) => prev.filter((c) => c._id !== commentId));
      })
      .catch((err) => console.error("Error deleting comment:", err));
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>

      {comments.length === 0 && <p>No comments yet.</p>}

      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment._id} className="border p-3 rounded">
            <p className="text-gray-700">{comment.text}</p>
            <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
              <span>
                By: <span className="font-semibold">{comment.user?.username || "User"}</span>
              </span>

              {isLoggedIn && user._id === comment.user?._id && (
                <button
                  onClick={() => handleDelete(comment._id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm"
                  aria-label="Delete comment"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {isLoggedIn && (
        <form onSubmit={handleAddComment} className="mt-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="3"
            placeholder="Write a comment..."
            className="w-full border rounded p-2"
            required
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
          >
            Add Comment
          </button>
        </form>
      )}
    </div>
  );
}

export default CommentSection;
