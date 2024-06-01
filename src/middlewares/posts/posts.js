import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '../../api/api_url';
import { setLoadPosts, setLoadPostsError, setPosts } from "../../store/posts/postsSlice";

export const getPostsAsync = createAsyncThunk(
    "get/post",
    async (data, { dispatch, getState }) => {
        dispatch(setLoadPosts(true))
        dispatch(setLoadPostsError(false))
        try {
            const response = await axios.get(`${API_URL}/post`, {
                headers: data.headers
            })
            if (response.status) {
                dispatch(setPosts(response.data))
                dispatch(setLoadPosts(false))
                dispatch(setLoadPostsError(false))
            }
        } catch (error) {
            dispatch(setLoadPosts(false))
            dispatch(setLoadPostsError(true))
            console.log("getPostsAsync error =====>", error);
        }
    }
)

export const createPostAsync = createAsyncThunk(
    "create/post",
    async (data, { dispatch, getState }) => {
        console.log({...data.body});
        dispatch(setLoadPosts(true))
        dispatch(setLoadPostsError(false))
        try {
            const response = await axios.post(`${API_URL}/post`, {
                ...data.body
            })
            if (response.status) {
                dispatch(setLoadPosts(false))
                dispatch(setLoadPostsError(false))
            }
        }
        catch (error) {
            dispatch(setLoadPosts(false))
            dispatch(setLoadPostsError(true))
            console.log("createPostAsync error =====>", error);
        }
    }
)