// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import tradesReducer from "./tradesSlice";
import aiReducer from "./aiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        trades: tradesReducer,
        ai: aiReducer,
    },
});