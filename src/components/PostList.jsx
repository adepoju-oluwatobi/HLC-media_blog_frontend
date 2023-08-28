import React, { useState, useEffect } from "react";
import { server_post } from "../server";
import axios from "axios";

function PostList() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(server_post);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-3xl mb-4 text-white">Posts</h1>
        {data ? (
          <div className="bg-white rounded-lg shadow-md p-4">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-2 border-r">Id</th>
                  <th className="py-2">Title</th>
                </tr>
              </thead>
              <tbody>
                {data.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-gray-50 transition duration-300 border-b"
                  >
                    <td className="p-3 border-r">{post.id}</td>
                    <td className="py-3 pl-4 pr-8">{post.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PostList;
