
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const fetchPostDetails = createAsyncThunk('posts/fetchPostDetails', async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], currentPost: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.currentPost = action.payload;
      });
  },
});

export default postsSlice.reducer;
