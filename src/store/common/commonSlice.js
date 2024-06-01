import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "auth",
    initialState: {
        loading: null,
        error: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    }
})

export const {
    setLoading,
    setError,
} = commonSlice.actions
export default commonSlice.reducer