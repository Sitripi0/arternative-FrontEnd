import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import DeletePost from "./DeletePost";
import CommentSection from "./CreateComments";

function PostDetails() {
  const { id } = useParams(); // post ID from URL
  const { API_URL, user, isLoggedIn } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setLoading(false);
      });
  }, [API_URL, id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!post) return <p className="text-center mt-10">Post not found.</p>;

  // Determine if the logged-in user is the owner of the post
  // post.authorId might be populated or just an ID string — normalize both to string for safe compare
  const authorId = post.authorId?._id || post.authorId;
  const isOwner = isLoggedIn && user && user._id === authorId;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        to="/posts"
        className="text-amber-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to posts
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        {post.mediaUrl && (
          <img
            src={post.mediaUrl}
            alt={post.title}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="capitalize bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
            {post.typeOfPost || "N/A"}
          </span>
          <span className="capitalize">{post.category}</span>
        </div>

        {post.date && (
          <p className="text-sm text-gray-400 mb-4">
            {new Date(post.date).toLocaleDateString()}
          </p>
        )}

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.text}
        </p>

        {/* Show Edit and Delete buttons only if user is owner */}
        {isOwner && (
          <>
            <DeletePost />
            <Link
              to={`/posts/${id}/edit`}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded inline-block mt-4"
            >
              Edit
            </Link>
          </>
        )}

        <CommentSection postId={id} />
      </div>
    </div>
  );
}

export default PostDetails;
