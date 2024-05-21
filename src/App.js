import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Posts } from './components/posts/Posts';
import { PostDetails } from './components/posts/PostDetails';
import './Posts.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetails />} />
    </Routes>
  );
}

export default App;