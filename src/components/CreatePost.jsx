import React, { useState } from "react";
import { server_post } from "../server";
import axios from "axios";

function PostForm() {
  const initialFormData = {
    id: "",
    title: "",
    des: "",
    image: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${server_post}`, formData);
      console.log(response.data.message);
      location.reload();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">
        Create a New Post
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-600">
            ID
          </label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
            placeholder="ID"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium text-gray-600">
            Image Link
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
            placeholder="Image Link"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-gray-600">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none"
            placeholder="Post Title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="des" className="block font-medium text-gray-600">
            Content
          </label>
          <textarea
            name="des"
            value={formData.des}
            onChange={handleChange}
            className="w-full p-2 border rounded-md outline-none resize-none h-40"
            placeholder="Content"
            required
          />
        </div>
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
