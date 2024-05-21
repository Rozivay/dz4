
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import { Link } from 'react-router-dom';


export function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const postList = posts.map((post, index) => (
    <div key={post.id} className="post">
      <h2>{index + 1}. {post.title}</h2>
      <p>{getShortValue(post.body)}</p>
      <Link to={`/posts/${post.id}`}>Подробнее...</Link>
      <Link to={`/posts/${post.id}`} className="details-button">Details</Link>
    </div>
  ));

  return <div className="posts">{postList}</div>;
}

function getShortValue(text) {
  return text.length > 20 ? text.slice(0, 20) + '...' : text;
}
