import React from "react";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import PostList from "../components/PostList";

function AdminPage() {
  return (
    <div>
      <Header />
      <div className="p-4 bg-[url(./assets/login-bg.jpeg)]">
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
}

export default AdminPage;
