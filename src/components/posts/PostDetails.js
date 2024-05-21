import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostDetails } from './postsSlice';
import { useParams } from 'react-router-dom';

export function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.currentPost);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostDetails(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <button onClick={() => window.history.back()}>Назад</button>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}
