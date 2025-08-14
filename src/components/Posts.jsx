import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { API_URL } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/posts`)
      .then((res) => {
        // Sort posts by date descending (newest first)
        const sortedPosts = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts);
      })
      .catch((err) => console.error("Error fetching posts", err));
  }, [API_URL]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">LAST POSTED</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600">No Posts</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {post.mediaUrl && (
                <img
                  src={post.mediaUrl}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>

                <p className="text-gray-600 mt-2 line-clamp-3">
                  {post.text}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="capitalize bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                    {post.typeOfPost || "N/A"}
                  </span>
                  <span className="capitalize">{post.category}</span>
                </div>

                {post.date && (
                  <p className="text-sm text-gray-400 mt-2">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                )}

                <div className="mt-4">
                  <Link
                    to={`/api/posts/${post._id}`}
                    className="inline-block text-amber-600 hover:underline text-sm font-medium"
                  >
                    More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
