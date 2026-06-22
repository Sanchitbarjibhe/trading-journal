// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: {
        name: string | null;
        email: string | null;
    } | null;
    isAuthenticated: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        loginSuccess: (state, action: PayloadAction<{ name: string; email: string }>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        logoutSuccess: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
        },
    },
});

export const { setAuthLoading, loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;