import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null,
        token: null
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
    }
})

export const { setCurrentUser, setToken } = authSlice.actions
export default authSlice.reducer