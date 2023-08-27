import React, { useState, useEffect } from "react";
import { server_post } from "../server";
import axios from "axios";

function PostPage() {
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
    <div>
      <div className="container">
        <h1>Post</h1>
        {data ? (
          data.map((post) => (
            <div key={post.id}>
              <img src={post.image} alt="" />
              <p className="post-title">{post.title}</p>
              <p className="content">{post.des}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PostPage;
