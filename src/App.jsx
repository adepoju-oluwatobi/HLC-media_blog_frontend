import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <PostPage />
    </div>
  );
}

export default App;
