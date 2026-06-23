// store/tradesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Trade {
    id: string;
    asset: string;
    type: "LONG" | "SHORT";
    entryPrice: number;
    exitPrice: number;
    pnl: number;
    status: "WIN" | "LOSS";
    timestamp: string;
    description?: string;
    riskReward?: string;
    // 🔥 NEW: Psychological Emotion Anchor Tag
    emotion?: "FOMO" | "GREED" | "FEAR" | "CALM" | "PATIENT" | "DISCIPLINED";
}

interface TradesState {
    tradesList: Trade[];
    filterType: "ALL" | "WIN" | "LOSS";
    loading: boolean;
}

const initialState: TradesState = {
    tradesList: [
        {
            id: "trade_01",
            asset: "BTCUSD",
            type: "LONG",
            entryPrice: 64200,
            exitPrice: 66500,
            pnl: 1150,
            status: "WIN",
            timestamp: "2026-06-23 14:35",
            description: "Clean breakout above the 4H consolidation zone. Strong volume confluence at lower boundaries.",
            riskReward: "1:2.3",
            emotion: "CALM" // 👈 Added
        },
        {
            id: "trade_02",
            asset: "ETHUSD",
            type: "SHORT",
            entryPrice: 3510,
            exitPrice: 3580,
            pnl: -140,
            status: "LOSS",
            timestamp: "2026-06-22 09:12",
            description: "Attempted to short the liquidity sweep above yesterday's high, but market squeezed aggressively.",
            riskReward: "1:1.5",
            emotion: "FOMO" // 👈 Added
        },
        {
            id: "trade_03",
            asset: "SOLUSD",
            type: "LONG",
            entryPrice: 142.50,
            exitPrice: 151.00,
            pnl: 425,
            status: "WIN",
            timestamp: "2026-06-21 18:20",
            description: "Perfect retest of the ascending trendline. Executed with tight risk parameters.",
            riskReward: "1:3.0",
            emotion: "DISCIPLINED" // 👈 Added
        }
    ],
    filterType: "ALL",
    loading: false,
};

const tradesSlice = createSlice({
    name: "trades",
    initialState,
    reducers: {
        setTradesLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        addTradeSuccess: (state, action: PayloadAction<Trade>) => {
            state.tradesList.unshift(action.payload);
        },
        deleteTradeSuccess: (state, action: PayloadAction<string>) => {
            state.tradesList = state.tradesList.filter((trade) => trade.id !== action.payload);
        },
        setTradeFilter: (state, action: PayloadAction<"ALL" | "WIN" | "LOSS">) => {
            state.filterType = action.payload;
        },
    },
});

export const { setTradesLoading, addTradeSuccess, deleteTradeSuccess, setTradeFilter } = tradesSlice.actions;
export default tradesSlice.reducer;