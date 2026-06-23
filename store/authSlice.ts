// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
    id: string;
    email: string;
    name: string;
    tier: "FREE" | "PRO";
}

interface AuthState {
    user: UserProfile | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    authError: string | null; // 👈 Handles login/signup global failure messages
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    authError: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Call this immediately when user triggers Login or Signup submit buttons
        setAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
            state.authError = null; // Clear previous errors on new attempts
        },

        // Handles both successful login AND fresh signup registrations seamlessly
        loginSuccess: (state, action: PayloadAction<{ user: UserProfile; token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false;
            state.authError = null;
        },

        // Global pipeline to catch and display registration or credential mismatch failures
        setAuthFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.authError = action.payload;
        },

        // Clear session states completely on exit triggers
        logoutSuccess: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.authError = null;
        },

        // Optional: Clears error messages when user switches screens between login and signup
        clearAuthErrors: (state) => {
            state.authError = null;
        },
    },
});

export const {
    setAuthLoading,
    loginSuccess,
    setAuthFailure,
    logoutSuccess,
    clearAuthErrors
} = authSlice.actions;

export default authSlice.reducer;