import React, { useState, useEffect } from "react";
import axios from "axios";
import { server_post } from "../server";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`${server_post}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  const handleEditClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-3xl mb-4 text-white">Posts</h1>
        <div className="bg-white rounded-lg shadow-md p-4">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 border-r">Id</th>
                <th className="py-2">Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-gray-50 transition duration-300 border-b"
                >
                  <td className="p-3 border-r">{post.id}</td>
                  <td className="py-3 pl-4 pr-8">{post.title}</td>
                  <td>
                    <Link to = {`/edit/${post.id}`}>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none"
                        onClick={() => handleEditClick(post.id)}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PostList;
