import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";

function PostPage() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://hlc-media-backend.onrender.com/api/user"
      );
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
          data.map((user) => (
            <div key={user.id}>
              <p className="post-title">{user.title}</p>
              <p className="content">{user.des}</p>
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
