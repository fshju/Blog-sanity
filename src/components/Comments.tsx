"use client";

import React, { useState, useEffect } from "react";

interface Comment {
  id: number;
  name: string;
  text: string;
}

const demoComments: Comment[] = [
  { id: 1, name: "Alice", text: "This is a great post!" },
  { id: 2, name: "Bob", text: "I found this very helpful, thanks!" },
];

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>("");
  const [commentText, setCommentText] = useState<string>("");

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (name.trim() !== "" && commentText.trim() !== "") {
      const newComment: Comment = {
        id: Date.now(), 
        name: name.trim(),
        text: commentText.trim(),
      };
      setComments([...comments, newComment]);
      setName("");
      setCommentText("");
    }
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEditComment = (id: number) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setName(commentToEdit.name);
      setCommentText(commentToEdit.text);
      handleDeleteComment(id); 
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-md mt-14">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          rows={4}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>

      {/* Background for all comments */}
      <div className="p-4 bg-gray-50 rounded-md shadow-sm space-y-4">
        {/* Demo Comments */}
        {demoComments.map((comment) => (
          <div
            key={comment.id}
            className="p-2 border-b border-gray-200 bg-gray-100 rounded-md"
          >
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.text}</p>
          </div>
        ))}

        {/* User Comments */}
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-2 border-b border-gray-200 bg-gray-100 rounded-md flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.text}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEditComment(comment.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
