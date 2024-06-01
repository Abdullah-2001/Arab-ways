import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: null,
        loadPosts: false,
        loadPostsError: false,
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        setLoadPosts: (state, action) => {
            state.loadPosts = action.payload
        },
        setLoadPostsError: (state, action) => {
            state.loadPostsError = action.payload
        },
    }
})

export const {
    setPosts,
    setLoadPosts,
    setLoadPostsError,
} = postSlice.actions
export default postSlice.reducer