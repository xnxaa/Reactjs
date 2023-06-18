import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usePostService from "../../services/post";

const initialState = {
  post: "",
};

const postSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsAsync.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const postService = usePostService();
    const _posts = await postService.getPosts();
    return _posts;
  }
);
