import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload
            console.log(action.payload)
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            return initialState
        },
        signupStart: (state) => {
            state.loading = true;
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload
            console.log(action.payload)
        },
        signupFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
});

export const { loginStart, loginSuccess, loginFailure, logout, signupStart, signupSuccess, signupFailure } = userSlice.actions;
export default userSlice.reducer;