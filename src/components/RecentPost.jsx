import React, { useState, useEffect } from "react";
import { server_post } from "../server";
import axios from "axios";

function RecentPost() {
  const [recentPost, setRecentPost] = useState(null);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    async function fetchRecentPost() {
      try {
        const response = await axios.get(`${server_post}`);
        const postData = response.data;

        if (postData.length > 0) {
          // Find the post with the highest ID (latest post)
          const latestPost = postData.reduce((prev, current) =>
            prev.id > current.id ? prev : current
          );

          setRecentPost(latestPost);
        }
      } catch (error) {
        console.error("Error fetching recent post:", error);
      }
    }

    fetchRecentPost();
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="p-4 section">
      <h2 className="text-xl font-semibold mb-4">Recent Post</h2>
      {recentPost ? (
        <div className="bg-white shadow-md p-6 rounded-md">
          <img className="rounded-xl" src={recentPost.image} alt="" />
          <h3 className="text-lg font-semibold mb-2">{recentPost.title}</h3>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showFullContent ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="content">{recentPost.des}</p>
          </div>
          <button
            className="mt-2 read-more"
            onClick={toggleContent}
          >
            {showFullContent ? "Hide Content" : "Read More"}
          </button>
        </div>
      ) : (
        <p>No recent posts found.</p>
      )}
    </div>
  );
}

export default RecentPost;
