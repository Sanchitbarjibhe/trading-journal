// store/aiSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AIReport {
    strength: string;
    weakness: string;
    edgeOptimizationScore: number;
}

interface AIState {
    metrics: {
        winRate: number;
        profitFactor: number;
        avgRR: string;
    };
    report: AIReport | null;
    loading: boolean;
}

const initialState: AIState = {
    metrics: {
        winRate: 68.4, // Baseline MVP initial tracking metric
        profitFactor: 2.41,
        avgRR: "1:3.2",
    },
    report: null,
    loading: false,
};

const aiSlice = createSlice({
    name: "ai",
    initialState,
    reducers: {
        setAILoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        updateAIMetrics: (state, action: PayloadAction<{ winRate: number; profitFactor: number; avgRR: string }>) => {
            state.metrics = action.payload;
        },
        generateAIReportSuccess: (state, action: PayloadAction<AIReport>) => {
            state.report = action.payload;
            state.loading = false;
        },
    },
});

export const { setAILoading, updateAIMetrics, generateAIReportSuccess } = aiSlice.actions;
export default aiSlice.reducer;