import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { server_post } from "../server";
import axios from "axios";
import Header from "./Header";

function EditPost() {
  // Extract the postId from the URL parameters
  const { postId } = useParams();

  // State to hold the post's title and content
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  // State to manage loading status and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Navigate function from react-router-dom for redirection
  const navigate = useNavigate();

  // Function to fetch post data from the server
  async function fetchPostData() {
    try {
      // Fetch the post's data using the postId
      const response = await axios.get(`${server_post}/${postId}`);
      const post = response.data;

      // Update the state with fetched data
      setTitle(post.title);
      setDes(post.des);
    } catch (error) {
      // Handle errors during fetching
      setError("Error fetching post data.");
    } finally {
      // Set loading to false once data is fetched or an error occurs
      setLoading(false);
    }
  }

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Create updated post data from the state
      const updatedPost = { title, des };

      // Send a PUT request to update the post on the server
      await axios.put(`${server_post}/${postId}`, updatedPost);
      console.log("Post updated successfully!");

      // Redirect to the admin page after successful update
      navigate("/admin");
    } catch (error) {
      // Handle errors during updating
      console.error("Error updating post:", error);
      setError("Error updating post.");
    }
  }

  // Fetch post data when the component mounts
  useEffect(() => {
    fetchPostData();
  }, []);

  // Display loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display error message if an error occurred
  if (error) {
    return <p>{error}</p>;
  }

  // Render the edit form once data is fetched and no errors
  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md p-6 rounded-md"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block font-medium mb-1">
              Content:
            </label>
            <textarea
              id="content"
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="w-full p-2 border rounded-md outline-none h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
