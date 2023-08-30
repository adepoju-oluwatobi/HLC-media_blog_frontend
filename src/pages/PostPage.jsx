import React, { useState, useEffect } from "react";
import { server_post } from "../server";
import axios from "axios";

function PostPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(server_post);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleToggleContent = (postId) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      <div className="section container">
        <p className="bg-[#51A4BE] w-fit text-white px-10 py-2 mb-2 rounded-xl">
          All Post
        </p>
        {data.map((post) => (
          <div key={post.id} className="mt-4">
            <img className="w-[90%] h-[150px] rounded-xl" src={post.image} alt="" />
            <p className="post-title">{post.title}</p>
            {expandedPostId === post.id && <p className="content">{post.des}</p>}
            <button
              className="read-more"
              onClick={() => handleToggleContent(post.id)}
            >
              {expandedPostId === post.id ? "Hide Content" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
