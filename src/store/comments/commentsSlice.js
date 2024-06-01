import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "auth",
    initialState: {
        loadComments: false,
        loadCommentsError: false,
    },
    reducers: {
        setLoadComments: (state, action) => {
            state.loadComments = action.payload
        },
        setLoadCommentsError: (state, action) => {
            state.loadCommentsError = action.payload
        },
    }
})

export const {
    setLoadComments,
    setLoadCommentsError
} = commentSlice.actions
export default commentSlice.reducer