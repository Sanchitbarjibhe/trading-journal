import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tradeApi = createApi({
    reducerPath: "tradeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["Trade"],
    endpoints: (builder) => ({
        getTrades: builder.query({
            query: () => "/trades",
            providesTags: ["Trade"],
        }),
        addTrade: builder.mutation({
            query: (newTrade) => ({
                url: "/trades",
                method: "POST",
                body: newTrade,
            }),
            invalidatesTags: ["Trade"],
        }),
    }),
});

export const { useGetTradesQuery, useAddTradeMutation } = tradeApi;