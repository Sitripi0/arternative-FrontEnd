// components/CommentList.js
function CommentList({ comments, currentUserId, isLoggedIn, onDelete }) {
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li key={comment._id} className="border p-3 rounded">
          <p className="text-gray-700">{comment.text}</p>
          <div className="text-sm text-gray-500 mt-2 flex justify-between items-center">
            <span>
              By: <span className="font-semibold">{comment.user?.username || "User"}</span>
            </span>

            {isLoggedIn && currentUserId === comment.user?._id && (
              <button
                onClick={() => onDelete(comment._id)}
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
  );
}

export default CommentList;
